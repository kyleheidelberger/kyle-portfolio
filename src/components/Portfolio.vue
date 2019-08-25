<template>
  <section>
    <h1>My Portfolio</h1>
    <h2>Slideshow</h2>
    <agile :autoplay-speed="3000" :speed="2500" fade="fade" pause-on-hover="pause-on-hover" pause-on-dots-hover="pause-on-dots-hover" autoplay="autoplay">
        <div class="slide" v-for="n in 6" :key="n" :class="`slide--${n}`">
      <h3>{{ n }}</h3>
    </div>
    <template slot="prevButton">prev<i class="fas fa-chevron-left"></i></template>
    <template slot="nextButton">next<i class="fas fa-chevron-right"></i></template>
    </agile>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "Portfolio",
  components: {
    agile: VueAgile
  },
  data: function() {
    return {};
  },
  mounted: {},
  methods: {}
};
</script>