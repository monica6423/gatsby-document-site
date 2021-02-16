import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getMenuState,
  isSidebarHide,
  isAnchorHide,
} from '../../store/selectors'

class ContainerTailor extends Component {
  render() {
    const {
      sidebarDocked,
      onPostPage,
      menuOpen,
      nMenuItem,
      sidebarHide,
      anchorHide,
    } = this.props

    return (
      <div
        style={{
          position: 'absolute',
          top:
            !sidebarDocked && onPostPage
              ? menuOpen
                ? nMenuItem * 32 + 0
                : 95
              : menuOpen
              ? nMenuItem * 32 + 10
              : 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'visible',
        }}
      >
        <div
          style={{
            paddingTop:
              !sidebarDocked && onPostPage && (!sidebarHide || !anchorHide)
                ? 20
                : 0,
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
    sidebarHide: isSidebarHide(state),
    anchorHide: isAnchorHide(state),
  }
}

export default connect(mapStateToProps)(ContainerTailor)
