<template>
  <nav v-resize="onResize">
    <v-app-bar
      max-height="70px"
      height="70px"
      color="primary"
      elevate-on-scroll
      app
    >
      <v-container>
        <v-row class="d-flex align-center">
          <v-col class="d-flex" cols="12" md="6">
            <nuxt-link to="/" style="text-decoration:none;">
              <div class="text-h3" style="font-family:logo !important;">
                <span class="white--text">Anime</span
                ><span class="accent--text">Zone</span>
              </div>
            </nuxt-link>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon
              dark
              class="hidden-md-and-up"
              @click="drawer = !drawer"
            />
          </v-col>
          <v-col class="hidden-sm-and-down" cols="12" md="6">
            <!-- <v-spacer class="d-flex"></v-spacer> -->
            <div class="d-flex flex-wrap">
              <v-spacer></v-spacer>
              <v-btn
                rounded
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
              <v-btn rounded color="accent">Download App</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-card tile>
      <!-- fixed -->
      <v-navigation-drawer bottom height="auto" temporary app v-model="drawer">
        <v-list dense>
          <!-- router
            link -->
          <v-list-item
            v-for="link in links"
            :key="link.id"
            :to="link.route"
            color="error"
            @click="goto(link)"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="extra in extralinks"
            :key="extra.id"
            router
            link
            :href="extra.link"
            target="_blank"
            color="accent"
            rel="noopener noreferrer"
          >
            <v-list-item-icon>
              <v-icon>{{ extra.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ extra.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon small>launch</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      windowSize: {
        x: 0,
        y: 0
      },
      links: [
        {
          id: "1",
          name: "Features",
          icon: "design_services",
          ids: "#features"
        },
        {
          id: "2",
          name: "Screenshots",
          icon: "screen_share",
          ids: "#screen"
        },
        {
          id: "3",
          name: "Download Now",
          icon: "get_app",
          ids: "#downloadnow"
        }
      ],
      extralinks: [
        {
          id: "101",
          title: "Discord",
          icon: "fab fa-discord",
          link: "https://discord.com/invite/s24egJNXqX"
        },
        {
          id: "102",
          title: "Reddit",
          icon: "fab fa-reddit",
          link: "https://www.reddit.com/r/animezoneapp"
        },
        {
          id: "103",
          title: "Github",
          icon: "fab fa-github",
          link: "https://github.com/spyderbibek/Anime-Zone"
        }
      ]
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      if (process.client) {
        this.windowSize = {
          x: window.innerWidth,
          y: window.innerHeight
        };
        if (this.windowSize.x >= 961) {
          this.drawer = false;
        }
      }
    },
    goto(link) {
      this.$vuetify.goTo(link.ids, {
        duration: 200,
        offset: 50,
        easing: "linear"
      }),
        (this.drawer = false);
    }
  }
};
</script>

<style></style>
