import colors from 'vuetify/es5/util/colors'

const bodyParser = require('body-parser')

module.exports = {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fa923f' },
    /*
     ** Global CSS
     */
    css: [
        '~assets/styles/main.css'
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        '~plugins/core-components.js',
        '~plugins/date-filter.js'
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: process.env.BASE_URL || 'https://nuxt-project-67c7c.firebaseio.com',
        credentials: false
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            light: true,
            themes: {
                light: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }
    },
    env: {
        baseUrl: process.env.BASE_URL || 'https://nuxt-project-67c7c.firebaseio.com',
        fbAPIKey: 'AIzaSyB6I0inSQVJph-DbkvPJLA_ikuFoJSAZ-0'
    },
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    serverMiddleware: [
        bodyParser.json(),
        '~/api'
    ]
}
