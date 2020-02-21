/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("./src/templates/page.js")
  const { data } = await graphql(
    `
      {
        allContentfulPage(
          filter: {
            node_locale: { eq: "en-US" }
            website: { in: ["Compare Guarantor Loans"] }
          }
        ) {
          nodes {
            slug
            contentful_id
          }
        }
      }
    `
  )
  data.allContentfulPage.nodes.forEach(node => {
    createPage({
      path: node.slug == "/" ? "/" : `/${node.slug}/`.replace("//", "/"),
      component: template,
      context: {
        contentful_id: node.contentful_id,
      },
    })
  })
}
