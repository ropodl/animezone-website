<template>
  <v-card color="transparent">
    <v-divider></v-divider>
    <v-footer color="transparent">
      <v-container>
        <v-row class="d-flex align-center">
          <v-col cols="12" md="6" class="text-overline">
            © Copyright {{ new Date().getFullYear() }} - BKSAPPS. All rights
            reserved.
          </v-col>
          <v-col class="d-flex flex-wrap" cols="12" md="6">
            <v-spacer></v-spacer>
            <v-btn
              icon
              v-for="social in socialLinks"
              :key="social.id"
              :class="social.title"
            >
              <v-icon>
                {{ social.icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          id: "1",
          title: "Discord",
          icon: "fab fa-discord"
        },
        {
          id: "2",
          title: "Reddit",
          icon: "fab fa-reddit"
        },
        {
          id: "3",
          title: "Github",
          icon: "fab fa-github"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.Discord {
  color: #7289da !important;
}
.Reddit {
  color: #ff5700 !important;
}
</style>
