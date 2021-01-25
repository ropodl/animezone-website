<template>
  <div class="home-page">
    <Herosection />
    <Features />
    <Screenshot />
    <Downloadsection />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoSrc: null
    };
  },
  methods: {
    videoDialog() {
      (this.videoSrc = "https://www.youtube.com/embed/Gjil2OxWirA"),
        (this.dialog = true);
    },
    videoDialogClose() {
      (this.videoSrc = null), (this.dialog = false);
    }
  }
};
</script>
