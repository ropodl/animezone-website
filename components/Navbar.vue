<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col cols="12" md="6">
        <nuxt-link to="/">
          <div class="text-h3" style="font-family:logo !important;">
            <span class="white--text">Anime</span
            ><span class="accent--text">Zone</span>
          </div>
        </nuxt-link>
      </v-col>
      <v-col class="d-flex flex-wrap" cols="12" md="6">
        <v-spacer></v-spacer>
        <v-btn
          to="#features"
          class="rounded-0"
          elevation="0"
          color="transparent"
        >
          Features
        </v-btn>
        <v-btn
          to="#screenshots"
          class="rounded-0"
          elevation="0"
          color="transparent"
        >
          Screenshots
        </v-btn>
        <v-btn rounded color="accent" class="px-10">Download App</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
