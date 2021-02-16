import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import 'katex/dist/katex.min.css'
import {
  onSidebarContentSelected,
  onSetSidebarContentEntry,
  onSetAnchorHide,
  onSetSidebarHide,
} from '../actions/layout'
import { getSidebarSelectedKey, getSidebarEntry } from '../store/selectors'

function Template({
  data, // this prop will be injected by the GraphQL query below.
  onSidebarContentSelected,
  selectedKey,
  onSetSidebarContentEntry,
  sidebarEntry,
  onSetAnchorHide,
  onSetSidebarHide,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our document data
  const { frontmatter, html, id } = markdownRemark

  const hideAnchor =
    frontmatter.hideAnchor === null ? false : frontmatter.hideAnchor
  const hideSidebar = frontmatter.sidebar === null ? true : false

  useEffect(() => {
    onSetAnchorHide(hideAnchor)
    onSetSidebarHide(hideSidebar)
  
  })

  if (selectedKey !== id) onSidebarContentSelected(id)
  if (sidebarEntry !== frontmatter.sidebar)
    onSetSidebarContentEntry(frontmatter.sidebar)

  return (
    <Layout onPostPage={true}>
      <div className="blog-post-container" >
        <div className="blog-post">
          {frontmatter.showTitle && <h1 align="center">{frontmatter.title}</h1>}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    selectedKey: getSidebarSelectedKey(state),
    sidebarEntry: getSidebarEntry(state),
  }
}

const mapDispatchToProps = {
  onSidebarContentSelected,
  onSetSidebarContentEntry,
  onSetAnchorHide,
  onSetSidebarHide,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Template)

//frontmatter to fields

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        slug
        lang
        sidebar
        showTitle
        hideAnchor
      }
    }
  }
`