import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import HeaderDoc from '../Header/HeaderDoc'
import ResponsiveSidebar from '../ResponsiveSidebar'
import Container from '../Container'
import ResponsiveAnchor from '../ResponsiveAnchor'
import ResponsiveTopBar from '../ResponsiveTopBar'
import MediaQuery from 'react-responsive'
import { default as AntdLayout } from 'antd/lib/layout'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import { connect } from 'react-redux'
import { isSidebarHide, isAnchorHide } from '../../store/selectors'
import { useIntl } from "gatsby-plugin-intl"
import './Layout.css'

const Layout = ({children, onPostPage, sidebarHide, anchorHide}) => {
  // setPostPageState = state => {
  //   this.props.setPostPageState(state)
  // }

  // const [PostPageState, setPostPageState] = useState()
  const intl = useIntl()

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <MediaQuery maxWidth={1000}>
              {matches => (
                <>
                  <Helmet
                    title={intl.formatMessage({ id: "title" })}
                    meta={[
                      { name: 'description for layout', content: 'Sample for layout' },
                      { name: 'keywords for layout', content: 'layout' },
                    ]}
                  >
                    <html lang={intl.locale} />
                  </Helmet>
                  <AntdLayout>
                    <AntdLayout.Header
                      style={{
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                        zIndex: 100,
                      }}
                    >
                      <Row>
                        <Col>
                          <HeaderDoc
                            siteTitle={data.site.siteMetadata.title}
                            sidebarDocked={!matches}
                          />
                        </Col>
                        {matches &&
                          onPostPage &&
                          (!anchorHide || !sidebarHide) && (
                            <Col>
                              {' '}
                              <ResponsiveTopBar />{' '}
                            </Col>
                          )}
                      </Row>
                    </AntdLayout.Header>
                    {!matches && onPostPage ? (
                      <AntdLayout>
                        {/* document page */}
                        {!sidebarHide && (
                          <AntdLayout.Sider>
                            <ResponsiveSidebar />
                          </AntdLayout.Sider>
                        )}
                        <AntdLayout.Content
                          style={{
                            position: 'absolute',
                            left: '20%',
                            right: '15%',
                          }}
                        >
                          <Container
                            sidebarDocked={!matches}
                            onPostPage={onPostPage}
                          >
                            {children}
                          </Container>
                        </AntdLayout.Content>
                        {!anchorHide && (
                          <AntdLayout.Sider>
                            <ResponsiveAnchor />
                          </AntdLayout.Sider>
                        )}
                      </AntdLayout>
                    ) : (
                      <AntdLayout.Content
                        style={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                        }}
                      >
                        <Container
                        >
                          {children}
                        </Container>
                      </AntdLayout.Content>
                    )}
                  </AntdLayout>
                </>
              )}
            </MediaQuery>
          )
        }}
      />
    )
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => {
  return {
    sidebarHide: isSidebarHide(state),
    anchorHide: isAnchorHide(state),
  }
}

export default connect(mapStateToProps)(Layout)
