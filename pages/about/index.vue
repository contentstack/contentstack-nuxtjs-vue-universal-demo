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
      

        <!-- About Section -->
        <section class="success" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>{{entry.title | exist }}</h2>
                        <hr class="star-light">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-lg-offset-2">
                        <p>{{entry.left_description | exist }}</p>
                    </div>
                    <div class="col-lg-4">
                        <p>{{entry.right_description | exist }}</p>
                    </div>
                </div>
            </div>
        </section>

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
        let res = await Stack.getEntry("about")
        return {entry: res, headers: res.header[0], footers:res.footer[0], banner:res.banner[0] }
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

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
.users {
  list-style-type: none;
}
.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>
