<template>
  <v-app dark>
    <Gotop />
    <Navbar />
    <v-main>
      <nuxt keep-alive />
    </v-main>
    <Footerbar />
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.theme--dark.v-application {
  background-color: #11161e;
}
</style>
