<template>
  <v-row id="features">
    <v-col cols="12">
      <SectionTitle :first="'App'" :second="'Feature'" />
    </v-col>
    <v-col
      cols="12"
      md="4"
      class="mx-auto"
      v-for="feature in features"
      :key="feature.id"
    >
      <v-card flat height="100%" color="transparent">
        <v-card-title>
          <v-icon class="mr-4" color="accent">{{ feature.icon }}</v-icon>
          {{ feature.title }}
        </v-card-title>
        <v-card-text>
          {{ feature.desc }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: "1",
          icon: "fal fa-broom",
          title: "Clean UI",
          desc: "AnimeZone has clean, responsive and compact user interface "
        },
        {
          id: "2",
          icon: "fal fa-sync-alt",
          title: "Sync Support",
          desc:
            "Sync and Manage your anime on MyAnimeList(MAL), Anilist and more."
        },
        {
          id: "3",
          icon: "fal fa-list-ol",
          title: "Lots of Anime",
          desc:
            "Huge library of both subbed and dubbed anime which are updated regularly."
        },
        {
          id: "4",
          icon: "fal fa-tachometer-fastest",
          title: "Fast and Functional",
          desc:
            "Fast streaming and downloading with multiple servers in multiple video quality."
        },
        {
          id: "5",
          icon: "fal fa-ad",
          title: "100% Ads Free",
          desc:
            "AnimeZone is 100% AdFree for uninterrupted streaming experience."
        },
        {
          id: "6",
          icon: "fal fa-receipt",
          title: "Detailed Anime Info",
          desc:
            "View detailed info of any anime ( Prequel, Sequels, reviews, recommendations )"
        },
        {
          id: "7",
          icon: "fal fa-calendar-check",
          title: "Schedule",
          desc:
            "Easily view your anime release schedule without leaving the app"
        },
        {
          id: "8",
          icon: "fal fa-search-plus",
          title: "Discover",
          desc:
            "Discover anime of any genre according to your preference and easily find what you wanna watch next."
        },
        {
          id: "9",
          icon: "fal fa-external-link-alt",
          title: "External App Support",
          desc:
            "Feature to use external application ( MXPlayer, VLC, IDM, ADM ) for both downloading and streaming"
        },
        {
          id: "10",
          icon: "fal fa-tv",
          title: "Android TV Support",
          desc: "Supports Android TV and VLC cast feature for PC."
        },
        {
          id: "11",
          icon: "fal fa-paint-brush-alt",
          title: "Customization",
          desc:
            "You can customize look and feel of AnimeZone according to your preference."
        },
        {
          id: "12",
          icon: "fal fa-cloud-download-alt",
          title: "Batch Downloading",
          desc:
            "Supports batch downloading for any anime you choose with IDM or any applications"
        },
        {
          id: "13",
          icon: "fal fa-newspaper",
          title: "Anime News",
          desc:
            "Read filtered anime and manga related news with ease in the app"
        }
      ]
    };
  }
};
</script>

<style></style>
