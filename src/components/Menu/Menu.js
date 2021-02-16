import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Button from 'antd/lib/button'
import { connect } from 'react-redux'
import { onChangeMenuState, onChangeProductState } from '../../actions/layout'
import List from 'antd/lib/list'
import { getMenuState, getProductState } from '../../store/selectors'
import { Link, injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { FaLanguage } from 'react-icons/fa'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { BsPeopleCircle } from 'react-icons/bs'
import Language from '../language'
import ProductList from '../ProductList';


class Menu extends Component {
  constructor(props) { 
    super(props); 
    this.state ={ 
      isHovering: false,
      showProduct: false,
      product: 'wug'
     } 
  } 

  mouseEnter = () => {
    console.log('enter languages')
    this.setState({isHovering: true}); 
  } 
  mouseLeave = () => { 
    console.log('leave languages')
    this.setState({isHovering: false}) 
  }
  productEnter = () => {
    this.setState({showProduct: true})
  }
  productLeave = () => {
    this.setState({showProduct: false})
  }
  onChangeMenuState = nItem => {
    this.props.onChangeMenuState(nItem)
  }

  onChangeProductState = product => {
    this.props.onChangeProductState(product)
  }

  render() {

    const { sidebarDocked, menuOpen, intl, product } = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            allMenuItemsJson {
              edges {
                node {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => {
          const menuItems = data.allMenuItemsJson.edges.map(edge => edge.node)
          return (
            
            <div>
              {sidebarDocked && (
                <div>
                  <div 
                  style={{ cursor:'pointer', color:'white', float: 'right', textAlign:'center',position:'relative', width:'100px'}} > 
                    <a target="_blank" rel="noopener noreferrer" href="https://portal.signaal.me/">
                      <BsPeopleCircle size={28} style={{color:'white'}}/> 
                    </a>
                  </div>
                  <div 
                  className='language-div'
                  style={{ cursor:'pointer', color:'white', float: 'right', textAlign:'center',position:'relative', width:'100px'}} > 
                    <FaLanguage size={28} /> 
                      <Language/>
                  </div>
                  {menuItems.reverse().map(item => {
                    return (
                      <div
                        style={{ marginLeft: '2em', float: 'right'}}
                        key={menuItems.indexOf(item)}
                      >
                            
                            {item.name==="Docs"?
                            <div style={{ margin: 0, fontSize: '1rem' }}>
                              <Link
                                className='product-div'
                                to={item.link}
                                style={{ color: 'white', textDecoration: 'none', position:'relative' }}
                              > 
                                <FormattedMessage id={item.name} /> 
                                <IoIosArrowDropdownCircle style={{verticalAlign:'middle', marginLeft:'3px'}}/>
                                <ProductList handleProduct={this.onChangeProductState}/>
                              </Link>
                            </div> :
                            <p style={{ margin: 0, fontSize: '1rem' }}>
                              <Link
                                to={item.link}
                                style={{ color: 'white', textDecoration: 'none', position:'relative' }}
                              >
                                <FormattedMessage id={item.name} /> 
                              </Link>
                            </p>
                            }
                      </div>
                    )
                  })}
                </div>
                
              )}
              {!sidebarDocked && (
                <Button
                  style={{
                    position: 'fixed',
                    right: 10,
                    top: 12,
                    color: 'white',
                  }}
                  type="link"
                  onClick={() => {
                    this.onChangeMenuState(menuItems.length)
                  }}
                  icon="menu"
                />
              )}
              {menuOpen && !sidebarDocked && (
                <List
                  itemLayout="horizontal"
                  dataSource={menuItems}
                  renderItem={item => (
                    <List.Item
                      style={{
                        listStyle: 'none',
                        marginLeft: '-20px',
                      }}
                      key={menuItems.indexOf(item)}
                    >
                      <List.Item.Meta
                        title={
                          <Link
                            to={item.link}
                            style={{ color: 'white', textDecoration: 'none'}}
                            onClick={() => {
                              this.onChangeMenuState(menuItems.length)
                            }}
                          >
                            {item.name}
                          </Link>
                        }
                      />
                    </List.Item>
                  )}
                  style={{
                    width: '100%',
                    float: 'left',
                  }}
                >
                <div style={{display:'flex', flexDirection:'column', alignItems: 'flex-end'}}>
                  <div 
                  style={{ cursor:'pointer',float: 'right', textAlign:'center',position:'relative', width:'100px'}} > 
                    <a target="_blank" rel="noopener noreferrer" href="https://portal.signaal.me/">
                      <BsPeopleCircle size={28} style={{color:'white'}}/> 
                    </a>
                  </div>
                  <div 
                  className='language-div'
                  style={{ cursor:'pointer',color:'white',float: 'right', textAlign:'center',position:'relative', width:'100px'}} > 
                    <FaLanguage size={28} /> 
                    <div style={{color:'black'}}>
                      <Language/>
                    </div>
                  </div>
                </div>
                </List>
              )}

            </div>
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    product: getProductState(state).product,
    menuOpen: getMenuState(state).open,
  }
}

const mapDispatchToProps = {
  onChangeMenuState,
  onChangeProductState
}

// export default Menu
export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Menu)
)

