<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col cols="12" md="6">
        <div>
          <div class="text-h3 mb-5 font-weight-light">
            Discover new anime from all around the world
          </div>
          <div class="text-h6 mb-5 font-weight-light">
            Best android app for every anime fans to enjoy streaming without any
            hassle and mainly without any ads!
          </div>
          <v-btn
            class="mr-4"
            rounded
            x-large
            link
            href="https://animezone.info/apk/animezone.apk"
            download
            style="background-color: #FF5722;"
          >
            <v-icon class="mr-3">download</v-icon> Download App
          </v-btn>
          <v-btn x-large icon class="play-button" style="">
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div
          style="position:relative;height: 512px;margin-top: 0;display: block;"
        >
          <div
            style="border-radius: 100%;background-color: #FF5722;height: 100px;width: 100px;position: absolute;left: 0%;top: 15%;"
          ></div>
          <div
            style="border-radius: 100%;background-color: #FF5722;height: 100px;width: 100px;position: absolute;left: 78%;top: 15%;"
          ></div>
          <div
            style="border-radius: 100%;background-color: #FF5722;height: 250px;width: 250px;position: absolute;left: 50%;bottom: 0%;"
          ></div>
          <div style="position: absolute;bottom: -6px;left: 0;">
            <img
              height="400px"
              src="https://uxtheme.net/demos/shade/s08/image/hero-phone-1.png"
            />
          </div>
          <div style="position:absolute;bottom:-6px;left: 118px;">
            <img
              height="512px"
              src="https://uxtheme.net/demos/shade/s08/image/hero-phone-2.png"
            />
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider class="mb-16"></v-divider>
    <v-row id="features">
      <v-col cols="12">
        <SectionTitle :first="'App'" :second="'Feature'" />
      </v-col>
      <v-col cols="12" md="4" class="mx-auto" v-for="feature in features" :key="feature.id">
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
    <v-row id="screenshots">
      <v-col cols="12">
        <SectionTitle :first="'App'" :second="'Screenshot'" />
      </v-col>
      <v-col cols="12" md="12"> </v-col>
    </v-row>
  </v-container>
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
<style lang="scss">
.play-button {
  background-color: #000000;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
