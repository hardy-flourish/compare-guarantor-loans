require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Starter`,
    description: `Gatsby project starter for the workfow I use.`,
    author: `@matemislov`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    "gatsby-transformer-remark",
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        ignore: ["/slick.css", "/slick-theme.css"],
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `amfbou08dyx7`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          "@components": "./src/components",
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Work Sans",
              variants: ["400", "700"],
            },
            {
              family: "Titillium Web",
              variants: ["400"],
            },
            {
              family: "Raleway",
              variants: ["400", "500", "700"],
            },
          ],
        },
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        //usePreload: true,
        //usePreconnect: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
