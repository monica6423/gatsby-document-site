const { languages, defaultLanguage } = require("./config");

const createSearchConfig = (indexName, language) => {
  return {
    resolve: 'gatsby-plugin-local-search',
    options: {
      name: indexName,
      engine: 'flexsearch',
      engineOptions: 'speed',
      query: `
      {
        allMarkdownRemark {
          nodes {
            id
            frontmatter {
              lang
              slug
              title
            }
            rawMarkdownBody
          }
        }
      }
    `,
      ref: 'id',
      index: ['body'],
      store: ['id', 'lang', 'slug', 'title'],
      normalizer: ({ data }) =>
        data.allMarkdownRemark.nodes.map((node) => ({
          id: node.id,
          lang: node.frontmatter.lang,

          slug: node.frontmatter.slug,
          title: node.frontmatter.title,
          body: node.rawMarkdownBody,
        })),
    },
  };
};


module.exports = {
  siteMetadata: {
    title: 'Signaal',
  },
  plugins: [
    createSearchConfig('english', 'en'),
    createSearchConfig('chinese', 'zh'),
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('autoprefixer')()]
      }
    },
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sass',
    {
			resolve: `gatsby-plugin-intl`,
			options: {
				path: `${__dirname}/locales`,
				languages,
				defaultLanguage,
				redirect: true
			}
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menuItems`,
        path: `${__dirname}/src/menuItems`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sidebars`,
        path: `${__dirname}/src/sidebars`
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-markdown',
        short_name: 'starter',
        start_url: '/',
        background_color: 'black',
        theme_color: 'black',
        display: 'minimal-ui',
        icon: 'src/images/signaal.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': '#053225',
              'layout-body-background': '#053225'

              // 'primary-color': 'rgb(77,181,173)',
              // 'layout-body-background': '#66ff79'
            }
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: 'post-toc-anchor',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
