<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col cols="12" md="6">
        <!-- <div> -->
        <div class="text-h3 mb-5 font-weight-light text-center text-md-left">
          Discover new anime from all around the world
        </div>
        <div class="text-h6 mb-5 font-weight-light text-center text-md-left">
          Best android app for every anime fans to enjoy streaming without any
          hassle and mainly without any ads!
        </div>
        <div class="d-flex">
          <v-spacer class="hidden-md-and-up"></v-spacer>
          <v-btn
            class="mr-4 accent"
            rounded
            x-large
            link
            href="/animezone.apk"
            download
          >
            <v-icon class="mr-3">download</v-icon> Download App
          </v-btn>
          <v-btn x-large icon class="play-button" @click="videoDialog()">
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <v-dialog
            v-model="dialog"
            width="100%"
            max-width="900px"
            @click:outside="videoDialogClose()"
          >
            <v-card class="pa-0 ma-0 video-dialog-card">
              <v-responsive :aspect-ratio="16 / 9">
                <iframe
                  width="100%"
                  height="100%"
                  id="player-1"
                  :src="videoSrc"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  frameborder="0"
                ></iframe>
              </v-responsive>
            </v-card>
          </v-dialog>
          <v-spacer></v-spacer>
        </div>
        <!-- </div> -->
      </v-col>
      <v-col cols="12" md="6">
        <div
          style="position:relative;height: 512px;margin-top: 0;display: block;"
        >
          <v-img
            eager
            contain
            max-height="512"
            src="/images/screen1.png"
            alt=""
            style="z-index:1;"
          ></v-img>
          <div
            style="border-radius: 100%;background-color: #FF5722;height: 100px;width: 100px;position: absolute;left: 0%;top: 15%;"
          ></div>
          <div
            style="border-radius: 100%;background-color: #FF5722;height: 100px;width: 100px;position: absolute;right: 0%;top: 15%;"
          ></div>
          <div
            style="border-radius: 100%;background-color: #FF5722;height: 250px;width: 250px;position: absolute;right: 0%;bottom: 0%;"
          ></div>
        </div>
      </v-col>
    </v-row>
    <v-divider class="mb-16"></v-divider>
  </v-container>
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
// .video-dialog-card {
//   height: 100%;
//   overflow: hidden;
//   iframe#player-1 {
//     width: 100%;
//     height: 100%;
//     aspect-ratio: 16/9;
//   }
// }
</style>
