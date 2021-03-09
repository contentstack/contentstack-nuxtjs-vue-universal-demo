/* eslint-disable no-dupe-keys */
/* eslint-disable nuxt/no-cjs-in-config */
const webpack = require("webpack");

export default {
  target: "static",
  env: {
    api_key: "blt398b654a8f2799a0",
    delivery_token: "cs5af301973f1478fa4eaca0b2",
    environment: "development",
  },
  head: {
    title: "Contentstack-Nuxtjs-Sample-App",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://nuxtjs.org/favicon.ico",
      },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/freelancer.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic",
      },
    ],
    script: [
      {
        src: "/javascript/jquery.min.js",
        body: true,
        defer: true,
      },
      {
        src: "/javascript/bootstrap.min.js",
        body: true,
        defer: true,
      },
      {
        src: "/javascript/contact-me.js",
        body: true,
        defer: true,
      },
      {
        src: "/javascript/freelancer.min.js",
        body: true,
        defer: true,
      },
      {
        src: "/javascript/jqBootstrapValidation.js",
        body: true,
        defer: true,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "coral" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  build: {
    vendor: ["lodash"],
    plugins: [
      new webpack.ProvidePlugin({
        _: "lodash",
      }),
    ],
  },
  plugins: [
    { src: "./plugins/vue-carousel.js", mode: "client" },
    // { src: "./static/javascript/jquery.min.js", mode: "client" },
    // { src: "./static/javascript/bootstrap.min.js", mode: "client" },
    // { src: "./static/javascript/contact-me.js", mode: "client" },
    // { src: "./static/javascript/freelancer.min.js", mode: "client" },
    // { src: "./static/javascript/jqBootstrapValidation.js", mode: "client" },
  ],
  // plugins: ["~/plugins/bootstrap-vue.js"],
  /*
   ** Nuxt.js dev-modules
   */
  // buildModules: ["@nuxtjs/eslint-module"],
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */ analyze: true,
    extend(config, ctx) {},
    babel: {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "entry",
            corejs: 3,
          },
        ],
      ],
      plugins: ["@babel/transform-runtime"],
    },
  },
};
