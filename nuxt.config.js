export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Lista de etiquetas",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap",
      },
    ],
    link: [{ rel: "icon", type: "image/png", href: "favicon.png" }],
    htmlAttrs: {
      lang: "es",
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  srcDir: "./client/src",
};
