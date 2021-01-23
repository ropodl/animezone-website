<template>
  <v-app-bar color="primary" elevate-on-scroll app>
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6">
          <nuxt-link to="/" style="text-decoration:none;">
            <div class="text-h3" style="font-family:logo !important;">
              <span class="white--text">Anime</span
              ><span class="accent--text">Zone</span>
            </div>
          </nuxt-link>
        </v-col>
        <v-col class="d-flex flex-wrap" cols="12" md="6">
          <v-spacer></v-spacer>
          <v-btn
            rounded
            class="px-10"
            @click="
              $vuetify.goTo('#features', {
                duration: 200,
                offset: 50,
                easing: 'linear'
              })
            "
            elevation="0"
            color="transparent"
          >
            Features
          </v-btn>
          <v-btn
            rounded
            class="px-10"
            @click="
              $vuetify.goTo('#screen', {
                duration: 200,
                offset: 50,
                easing: 'linear'
              })
            "
            elevation="0"
            color="transparent"
          >
            Screenshots
          </v-btn>
          <v-btn rounded color="accent" class="px-10">Download App</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
