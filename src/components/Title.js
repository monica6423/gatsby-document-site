import { useStaticQuery, graphql } from 'gatsby'

function useTitle() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data.site.siteMetadata.title
}

export default useTitle