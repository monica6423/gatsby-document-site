import React, { Component } from 'react'
import { graphql, StaticQuery} from 'gatsby'
import { connect } from 'react-redux'
import { getSidebarState, getProductState } from '../../store/selectors'
import {
  onSetSidebarOpen,
  onSetSidebarContentStructure,
  onSidebarContentExpanded,
} from '../../actions/layout'
import Menu from 'antd/lib/menu'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import 'antd/lib/menu/style/index.less'
import './SidebarContents.css'


const SubMenu = Menu.SubMenu

class SidebarContents extends Component {
  onSetSidebarOpen = () => {
    this.props.onSetSidebarOpen(false)
  }

  onChangeExpandedKeys = keys => {
    this.props.onSidebarContentExpanded(keys)
  }


  render() {
    const {
      selectedKey,
      expandedKeys,
      entry,
      selectedEntry,
      contentTree,
      contentDir,
    } = this.props.sidebar


    const { intl, product } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query sidebarContentQuery {
            allMarkdownRemark(sort: { order: ASC, fields: [fields___slug] }) {
              nodes {
                fields {
                  slug
                }
                id
                frontmatter {
                  id
                  title
                  lang
                }
              }
            }
            allSidebarsWugJson {
                nodes {
                    id
                    name
                    entry
                    child_entries
                    items
                }
            }
            allSidebarsNetAppJson {
                nodes {
                    id
                    name
                    entry
                    child_entries
                    items
                }
            }
            allSidebarsPaloAltoJson {
                nodes {
                    id
                    name
                    entry
                    child_entries
                    items
                }
            }
          }
        `}
        render={(data) => {
          let entries
          if(product === 'pa') {
            entries = data.allSidebarsPaloAltoJson.nodes
          }else if(product === 'wug'){
            entries = data.allSidebarsWugJson.nodes
          }else {
            entries = data.allSidebarsNetAppJson.nodes
          }
          //const entries = data.allSidebarsPaloAltoJson.nodes
          const pages = data.allMarkdownRemark.nodes
 
          const selectedKeys = [selectedKey]
          let dir = []
          let tree = null
          let defaultOpenKeys = []
          
          const convertToTree = (entry, parent) => {
            const rootEntry = getEntry(entry)
            const child_dir = rootEntry.child_entries
              ? rootEntry.child_entries.map(item =>
                  convertToTree(item, rootEntry.id)
                )
              : null
            let children = itemToNode(rootEntry)
            if (children && child_dir) children = children.concat(child_dir)
            else if (children === null) children = child_dir
            const node = {
              key: rootEntry.id,
              title: rootEntry.name,
              children: children,
              parent: parent,
            }

            dir.push(node)
            return node
          }

          const getEntry = entry => {
            for (let item in entries) {
              if (entries[item].name === entry) return entries[item]
            }
            return null
          }

          const getNode = key => {
            for (let item in dir) {
              if (dir[item].key === key) return dir[item]
            }
            return null
          }

          const itemToNode = entry => {
            if (entry.items == null) return null
            return entry.items.map(item => {
              return getPage('/' + item, entry.id)
            })
          }

          const getPage = (path, parent) => {
            for (let item in pages) {
              if (pages[item].fields.slug === '/'+intl.locale+path) {
                const node = {
                  path: pages[item].fields.slug.substr(3),
                  key: pages[item].id,
                  title: <FormattedMessage id={pages[item].frontmatter.id} />,
                  //title: pages[item].frontmatter.title,
                  parent: parent,
                }
                dir.push(node)
                return node
              }
            }
            return null
          }

          const addOpenKeys = key => {
            if (key && key !== selectedKey) defaultOpenKeys.push(key)
            const parent = getNode(key)
            if (parent) addOpenKeys(parent.parent)
          }


          if (selectedEntry === null || selectedEntry !== entry) {
            //update tree when choose product
            tree = convertToTree(entry, null)
            this.props.onSetSidebarContentStructure(entry, tree, dir)
            addOpenKeys(selectedKey)
            this.onChangeExpandedKeys(defaultOpenKeys)
          } else {
            //update tree when choose product
            tree = convertToTree(entry, null)
            dir = contentDir
            defaultOpenKeys = expandedKeys
          }

          const loop = root => {
            if (root.children) {
              return root.children.map(item => {
                if (item.path) {
                  return (
                    <Menu.Item key={item.key}>
                      <Link activeClassName="active" to={item.path} onClick={this.onSetSidebarOpen}>
                        {item.title}
                       
                      </Link>
                    </Menu.Item>
                  )
                }
                return (
                  <SubMenu
                    key={item.key}
                    title={
                      <span style={{ fontWeight: 750 }}>{item.title}</span>
                    }
                  >
                    {loop(item)}
                  </SubMenu>
                )
              })
            }
          }
          return (
            <Menu
              mode="inline"
              defaultOpenKeys={defaultOpenKeys}
              selectedKeys={selectedKeys}
              inlineIndent={12}
              onOpenChange={this.onChangeExpandedKeys}
            >
              {loop(tree)}
            </Menu>
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    product: getProductState(state).product,
    sidebar: getSidebarState(state),
  }
}

const mapDispatchToProps = {
  onSetSidebarOpen,
  onSetSidebarContentStructure,
  onSidebarContentExpanded,
}

export default injectIntl(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContents)
)

