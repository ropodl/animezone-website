import colors from 'vuetify/es5/util/colors'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - Best android app for streaming anime',
        title: 'AnimeZone',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Material+Icons"
            }, {
                rel: 'stylesheet',
                href: 'https://pro.fontawesome.com/releases/v5.8.2/css/all.css'
            }
        ]
    },
    /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#FF5722"
  },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        },
        icon: {
            source: "./static/icon.png"
          },
          meta: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "AnimeZone",
            author: "noob",
            icon: "./static/icon.png",
            theme_color: "#FF5722"
          }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        defaultAssets: {
            icons: "mdi"
          },
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: '#11161e',
                    accent: "#FF5722",
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    server: {
        // host: "192.168.1.105",
        // port: 8000
    },
    workbox: {
        runtimeCaching: [
          {
            urlPattern: "https://fonts.googleapis.com/.*",
            handler: "cacheFirst",
            method: "GET",
            strategyOptions: {
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: "https://animezone.info/*",
            handler: "cacheFirst",
            method: "GET",
            strategyOptions: {
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
}