// import { replacePath } from './utils'
const replacePath = require('./utils')
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    //對於Mdx而言，他的每一個檔名都不一樣，所以可以使用createFilePath來製作出不一樣的字串
    const slug = createFilePath({ 
      node, 
      getNode, 
      basePath: `pages` })
    const newSlug = "/" + node.frontmatter.lang + value
    createNodeField({
      node,
      name: `slug`,
      value: replacePath(slug),
    })

  }
}

//fields and slug

//run in graphQL and check url
// query MyQuery {

//   allMarkdownRemark {
//     edges {
//       node {
//         fields {
//           slug
//         }
//       }
//     }
//   }
// }
