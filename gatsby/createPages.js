
const replacePath = require('./utils')
const path = require("path")

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/postTemplate.js`)
  //fields to frontmatter
  //add fields slug
  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              lang
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }


    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

      const language = node.frontmatter.lang
      const locale = language !== "zh" ? `/${language}` : ""

      createPage({
        path: `${node.fields.slug}`,
        //path: `${node.frontmatter.slug}`,
        //path: replacePath(node.fields.slug),
        component: postTemplate,
        context: {
          slug: node.fields.slug,
          //slug: node.frontmatter.slug,
          lang: language
        }, // additional data can be passed via context
      })
    })

  })
}