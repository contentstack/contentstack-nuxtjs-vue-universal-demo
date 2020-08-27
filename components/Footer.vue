<template>
  <footer v-if="footer" class="text-center">
    <div class="footer-above">
      <div class="container">
        <div class="row">
          <div class="footer-col col-md-4">
            <h3>{{ footer.location.title }}</h3>
            <p>{{ footer.location.address }}</p>
          </div>
          <div class="footer-col col-md-4">
            <h3>{{ footer.social.title }}</h3>
            <ul class="list-inline">
              <li
                v-for="social in footer.social.social_links"
                :key="social.title"
              >
                <a :href="social.url" class="btn-social btn-outline">
                  <span class="sr-only">{{ social.title }}</span>
                  <i :class="social.fontawesome_class"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col col-md-4">
            <h3>{{ footer.freelancer.title }}</h3>
            <div v-if="footer.freelancer.body">
              <div v-html="footer.freelancer.body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-below">
      <div class="container">
        <div class="row">
          <div v-if="footer.copyright">
            <div class="col-lg-12" v-html="footer.copyright"></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["footer"],
};
</script>

<style></style>
