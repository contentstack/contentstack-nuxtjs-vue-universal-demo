<template>
    <div v-if="entry">
        <myheader :headers="headers"/>
        <header>
            <div class="container" id="maincontent" tabindex="-1">
                <div class="row">
                    <div class="col-lg-12">
                        <div v-if="banner.image"><img v-bind:src="banner.image.url" alt="" class="img-responsive"></div>
                        <div class="intro-text">
                            <h1 class="name">{{banner.title | exist }}</h1>
                            <hr class="star-light">
                            <span class="skills">{{banner.description | exist }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>{{entry.title | exist }}</h2>
                        <hr class="star-primary">
                    </div>
                </div>
                <div class="row">
                    <div v-for="folio in entry.portfolo_details" class="col-sm-4 portfolio-item">
            
                        <a v-bind:href="folio.hash_link | exist | addHash " class="portfolio-link" data-toggle="modal">
                            <div class="caption">
                                <div class="caption-content">
                                    <i class="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <div v-if="folio.image"><img v-bind:src="folio.image.url" class="img-responsive" alt="Cabin"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
       
       
        <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
        <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
            <a class="btn btn-primary" href="#page-top">
                <i class="fa fa-chevron-up"></i>
            </a>
        </div>
      <!-- Portfolio Modals -->
        <div v-for="folio in entry.portfolo_details">
            <div v-bind:id="folio.hash_link" class="portfolio-modal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl">
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-2">
                                <div class="modal-body">
                                    <h2>{{folio.title}}</h2>
                                    <hr class="star-primary">
                                    <div v-if="folio.image"><img v-bind:src="folio.image.url" class="img-responsive img-centered" alt=""></div>
                                    <div v-html="folio.description"></div>
                                    <ul class="list-inline item-details">
                                        <li>Client:
                                            <strong><a v-bind:href="folio.client_link | exist ">{{folio.client | exist }}</a>
                                            </strong>
                                        </li>
                                        <li>Date:
                                            <strong><a v-bind:href="folio.date_link | exist ">{{folio.date | exist }}</a>
                                            </strong>
                                        </li>
                                        <li>Service:
                                            <strong><a v-bind:href="folio.service_link | exist ">{{folio.service | exist }}</a>
                                            </strong>
                                        </li>
                                    </ul>
                                    <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <myfooter :footers="footers"/>
        <!-- jQuery -->
        <script src="/javascript/jquery.min.js"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="/javascript/bootstrap.min.js"></script>

        <!-- Plugin JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

        <!-- Contact Form JavaScript -->
        <script src="/javascript/jqBootstrapValidation.js"></script>
        <script src="/javascript/contact_me.js"></script>

        <!-- Theme JavaScript -->
        <script src="/javascript/freelancer.min.js"></script>
    </div>
</template>

<script>
    import Stack from '~plugins/entry'
    import myheader from '~components/header'
    import myfooter from '~components/footer'
    export default {
        filters:{
            addHash: function (value){
                return "#"+value
            },
            exist: function (entry){
                if(entry){
                    return entry
                }else{
                    return
                }

            }
        },
        async asyncData (){
        let res = await Stack.getEntry("portfolio")
        return {entry: res, headers: res.header[0], footers:res.footer[0], banner: res.banner[0]}
        },
        head () {
            return {
                title: this.entry.title
            }
        },
        data (context) {
             headers: ''
             footers:''
        },
        components: {
            myheader,
            myfooter
        }

    }

</script>