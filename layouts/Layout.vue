<template>
  <div v-if="entry">
    <myHeader v-if="this.entry.url === '/'" :header="this.entry.header[0]" />
    <customHeader v-else :header="this.entry.header[0]"></customHeader>
    <nuxt />
    <myFooter :footer="this.entry.footer[0]" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import myHeader from "../components/Header";
import customHeader from "../components/customHeader";
import myFooter from "../components/Footer";
export default {
  components: {
    myHeader,
    myFooter,
    customHeader,
  },
  computed: mapState(["entry"]),
};
</script>
