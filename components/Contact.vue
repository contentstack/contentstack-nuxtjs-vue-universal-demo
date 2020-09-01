<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>{{ entry.title }}</h2>
          <hr class="star-primary" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 address">
          <div><b>Address: </b>{{ entry.address }}</div>
          <div><b>Phone: </b> {{ entry.phone_number }}</div>
          <div><b>Email: </b> {{ entry.email }}</div>
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

<style></style>
