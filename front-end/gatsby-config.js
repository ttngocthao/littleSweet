
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Little Sweet",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Little Sweet",
        short_name: "littleSweet",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    // {
    //   resolve: "gatsby-plugin-anchor-links",
    //   options: {
    //     offset: -150,
    //     duration: 2000,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Merienda`,
          `cursive\:,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
     {
            resolve: 'gatsby-plugin-snipcart',
            options: {
                //replace with own Snipcart API key
                apiKey:'NTFiNmIyNTItMGQyNi00MzE2LTkzZGMtYTA0YjExMzNhNTc2NjM3NjkwNDgxODY4MTUwMDYz',
                autopop: true,
            }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-create-client-paths`,//These paths exist on the client only and do not correspond to index.html files in an app’s built assets.
      options: { prefixes: [`/app/*`] }
    },
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: "AIzaSyC8t5fcjctNhWp8Qk2nGWkzLYNHshjVrAw",
    //       authDomain: "little-sweet-82aa6.firebaseapp.com",
    //       databaseURL: "little-sweet-82aa6.firebaseapp.com",
    //       projectId: "little-sweet-82aa6",
    //       storageBucket: "little-sweet-82aa6.appspot.com",
    //       messagingSenderId: "122014673849",
    //       appId: "1:122014673849:web:d27e83c86d74f97875a468"
    //     }
    //   }
    // }
  ],
};
