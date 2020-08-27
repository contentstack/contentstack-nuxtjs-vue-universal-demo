<template>
  <section id="about" class="success">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>{{ entry.title }}</h2>
          <hr class="star-light" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-lg-offset-2">
          <p>{{ entry.left_description }}</p>
        </div>
        <div class="col-lg-4">
          <p>{{ entry.right_description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["entry"],
};
</script>
