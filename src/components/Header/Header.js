import React, { Component,Fragment } from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'
import Logo from '../../pages/LOGO-white.svg'
import { getProductState } from '../../store/selectors'



class Header extends Component {
  
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = document.documentElement.scrollTop;
      if (isTop > 250) {
          this.setState({ isTop: false })
      }else{
        this.setState({ isTop: true })
      }
    });
  }


  render() {
    const { siteTitle, sidebarDocked, menuOpen, nMenuItem } = this.props


    return (
      <div
        style={{
          width: '100%',
          height: !menuOpen ?  60: (this.state.isTop? 180:nMenuItem * 40 + 100) ,
          marginBottom: 20,
          transition: 'all .4s',
          background: !menuOpen && this.state.isTop? 'transparent': 'rgb(77, 181, 173)'
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
                {this.state.isTop? (null): (<Fragment><img style={{width:'1.5rem', marginBottom:'0', marginRight:'10px'}} src={Logo} alt=""/>
                <h1 style={{ margin: 0, fontSize: '1.25rem', color:'white'}}>{siteTitle}</h1></Fragment>)}
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
