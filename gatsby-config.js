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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158667528-1",
        head: false,
        respectDNT: false,
        // cookieDomain: "compareguarantorloans.co.uk",
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TJR229D",
        includeInDevelopment: true,
      },
    },
  ],
}
