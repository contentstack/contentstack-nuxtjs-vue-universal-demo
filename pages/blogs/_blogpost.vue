<template>
  <section v-if="entry.modular_blocks[0]" class="singleBlogPost">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="blogpostTitle">{{ entry.title }}</h2>
        </div>
        <div
          v-for="(blog, key) in entry.modular_blocks[0].blog_post_page
            .blog_post"
          :key="key"
          class="row"
        >
          <div
            v-if="blog.hasOwnProperty('blog_content')"
            class="blogContent"
            v-html="blog.blog_content.blog_post_content"
          ></div>
          <div
            v-else-if="blog.hasOwnProperty('image_carousel')"
            class="blogCarousel"
          >
            <template>
              <div class="carousel-wrapper">
                <h3 class="carouselTitle">Slide Show</h3>
                <client-only>
                  <carousel v-bind="options">
                    <slide
                      v-for="(imgs, i) in blog.image_carousel.image"
                      :key="i"
                      class="img-wrapper"
                    >
                      <img
                        :src="imgs.url"
                        :alt="imgs.filename"
                        class="carouselImages"
                      />
                    </slide>
                  </carousel>
                </client-only>
              </div>
            </template>
          </div>
          <div
            v-else-if="blog.hasOwnProperty('blog_quotes')"
            class="blogQuotes"
          >
            <h3 class="quotesTitle">Quotes</h3>
            <blockquote
              class="otroBlockquote"
              v-html="blog.blog_quotes.quote"
            />
          </div>
          <div
            v-else-if="blog.hasOwnProperty('social_network_embed')"
            class="blogSocialNtw"
          >
            <h3 class="socialNtwTitle">Social Network</h3>
            <div v-html="blog.social_network_embed.embed_code"></div>
          </div>
        </div>
      </div>
    </div>
    <div><a href="/blog"></a></div>
  </section>
</template>

<script>
import Stack from "../../plugins/entry";
export default {
  async asyncData({ params, store, error }) {
    let blogRes = await Stack.getEntry("blog_posts");
    blogRes = blogRes.filter((obj) => obj.url === "/" + params.blogpost);
    if (blogRes) {
      store.commit("setEntries", blogRes[0]);
      return { entry: blogRes[0] };
    } else {
      error({ statusCode: 404, message: "Page Not Found" });
    }
  },
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        autoplay: true,
        paginationEnabled: false,
      },
    };
  },
  layout: "Layout",
};
</script>
