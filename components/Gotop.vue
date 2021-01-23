<template>
  <div class="gototop">
    <transition name="slide-fade">
      <v-btn
        aria-label="Go to top"
        fixed
        dark
        bottom
        right
        fab
        color="accent"
        @click="$vuetify.goTo('#app', {
              duration: 200,
              offset: 50,
              easing: 'linear'
            })"
        v-scroll="onScroll"
        v-show="fab"
        style="box-shadow: 0px 0px 0px 0px transparent !important;"
      >
        <v-icon>arrow_upward</v-icon>
      </v-btn>
    </transition>
  </div>
</template>
<script>
export default {
  name: "gotop",
  data() {
    return {
      fab: false
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 300;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
<style>
button.v-btn {
  z-index: 2;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}
</style>
