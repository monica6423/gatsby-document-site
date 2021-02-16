import React, { Component } from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'
import Logo from '../../pages/LOGO-white.svg'
import { getProductState } from '../../store/selectors'

class Header extends Component {

  state = {
    background:'#a3a1a1'
  }

  checkBackground () {
    if(this.props.product === 'pa') {
      this.setState({background: '#FFA544'})
    } else if (this.props.product === 'na') {
      this.setState({background:'#35A7FF'})
    }else{
      this.setState({background:'rgb(77, 181, 173)'})
    }
  }

  componentDidMount(){
    this.checkBackground();
  }

  componentDidUpdate(prevProps){
    if(this.props.product != prevProps.product){
      this.checkBackground();
    }
  }

  render() {
    const { siteTitle, sidebarDocked, menuOpen, nMenuItem } = this.props

    return (
      <div
        style={{
          // position: "fixed",
          // top: 0,
          width: '100%',
          height: menuOpen && !sidebarDocked ? nMenuItem * 40 + 100 : 55,
          marginBottom: 20,
          transition: 'all .4s',
          background: this.state.background,
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1360,
            padding: '15px 18px',
            whiteSpace: 'nowrap',
          }}
        >
          <div
            style={{
              float: 'left',
              marginBottom: '10px',
            }}
          >
            <h1 style={{ margin: 0, fontSize: '1.25rem' }}>
              <Link
                to="/zh/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img style={{width:'1.5rem', marginBottom:'0', marginRight:'10px'}} src={Logo} alt=""/>
                <h1 style={{ margin: 0, fontSize: '1.25rem', color:'white' }}>{siteTitle}</h1>
              </Link>
            </h1>
          </div>
          <Menu sidebarDocked={sidebarDocked} />

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: getProductState(state).product,
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
  }
}

export default connect(mapStateToProps)(Header)
