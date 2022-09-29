// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
})
