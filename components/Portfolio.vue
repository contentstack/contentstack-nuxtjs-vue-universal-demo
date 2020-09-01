<template>
  <section id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>{{ entry.portfolio.title }}</h2>
          <hr class="star-primary" />
        </div>
      </div>
      <!-- <span>{{ filter }}</span> -->
      <div class="row">
        <div
          v-for="(folio, i) in filter"
          :key="i"
          class="col-sm-4 portfolio-item"
        >
          <a
            :href="('#' + folio.hash_link)"
            class="portfolio-link"
            data-toggle="modal"
          >
            <div class="caption">
              <div class="caption-content">
                <i class="fa fa-search-plus fa-3x"></i>
              </div>
            </div>
            <div v-if="folio.image">
              <img
                :src="folio.image.url"
                class="img-responsive"
                :alt="folio.image.filename"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import orderBy from "lodash/orderBy";
export default {
  props: ["entry"],
  data() {
    return {
      portfolios: "",
      filter: [],
    };
  },
  watch: {
    portfolios(val) {
      switch (val) {
        case "A-Z":
          this.filter = orderBy(this.filter, ["title"], ["ase"]);
          break;
        case "Z-A":
          this.filter = orderBy(this.filter, ["title"], ["desc"]);
          break;
        default:
          this.filter = this.entry.portfolio.portfolo_details;
      }
    },
  },
  mounted() {
    this.filter = this.entry.portfolio.portfolo_details;
  },
  methods: {
    handleClick(e) {
      this.portfolios = e.target.textContent;
    },
  },
};
</script>

<style>
.dropdown-list:hover {
  background-color: coral;
}
.dropdown-list:active {
  background-color: coral;
  opacity: 0.7;
}
</style>
