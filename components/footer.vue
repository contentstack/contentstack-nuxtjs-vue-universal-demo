<template>
  <!-- Footer -->
  <footer v-if="footers" class="text-center">
    <div class="footer-above">
      <div class="container">
        <div class="row">
          <div class="footer-col col-md-4">
            <h3>{{footers.location.title | exist }}</h3>
            <p>{{footers.location.address | exist }}</p>
          </div>
          <div class="footer-col col-md-4">
            <h3>{{footers.social.title}}</h3>
            <ul class="list-inline">
              <li v-for="social in footers.social.social_links">
                <a v-bind:href="social.url | exist " class="btn-social btn-outline"><span class="sr-only">{{social.title | exist }}</span><i v-bind:class="social.fontawesome_class | exist "></i></a>
              </li>
            </ul>
          </div>
          <div class="footer-col col-md-4">
            <h3>{{footers.freelancer.title | exist }}</h3>
            <div v-if="footers.freelancer.body"><div v-html="footers.freelancer.body"></div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-below">
      <div class="container">
        <div class="row">
          <div v-if="footers.copyright"><div v-html="footers.copyright" class="col-lg-12"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: ['footers'],
    filters:{
      exist: function (entry){
        if(entry){
          return entry
        }else{
          return
        }

      }
    }
  }
</script>

