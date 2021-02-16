import React, { useEffect, useRef, useState} from 'react'
import { Parallax } from 'react-scroll-parallax';
import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import AOS from 'aos';
import 'aos/dist/aos.css'
//import Button from 'antd/lib/button'
//import { StaticQuery, graphql } from 'gatsby'
import MediaQuery from 'react-responsive'
import 'antd/lib/button/style/css'
//import { Link } from 'gatsby'
import { default as AntdLayout } from 'antd/lib/layout'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Header from '../components/Header/Header'
//import ResponsiveTopBar from '../components/ResponsiveTopBar'
import { connect } from 'react-redux'
import { isSidebarHide, isAnchorHide } from '../store/selectors'
import useTitle from '../components/Title';
import Logo from './LOGO-white.svg';
import Demo from './demo.png';
import Dialogue from './dialogue.png';
import MobilePhone from './mobile-phone.png';
import PhoneDemo from './phone-demo3.png';
import GroupMedia from './Groupmedia.svg';
import SMS from './sms.png';
import Dot from './dotdot.svg';
import Dot5 from './dot5.svg';
import telegram from './socialmediaImg/telegram.svg';
import Line from './socialmediaImg/LINE.svg';
import Messenger from './socialmediaImg/Messenger.svg';
import WeChat from './socialmediaImg/WeChat.svg';
import WhatsApp from './socialmediaImg/WhatsApp.svg'
import Viber from './socialmediaImg/viber.png';
//import Dot2 from './dotdot2.svg';
import SocialNetwork from './social-network.png';
import CarouselSlide from '../components/CarouselSlide/CarouselSlide';
import { SLIDE_INFO } from '../data/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';
import { AiOutlineDown } from 'react-icons/ai';
import Projects from '../components/Projects/Projects'
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

  return <div style={{margin:'10px', color:'#d1d1d1'}} onClick={clickFunction}>{icon}</div>;
}
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)



const IndexPage = ({children}) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef)
  const intl = useIntl()
  const title = useTitle()

  /** carousel start **/
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');

  const onArrowClick = (direction) => {
      const increment = direction === 'left' ? -1 : 1;
      const newIndex = (index + increment + numSlides) % numSlides;

      const oppDirection = direction === 'left' ? 'right' : 'left';
      setSlideDirection(direction);
      setSlideIn(false);

      setTimeout(() => {
          setIndex(newIndex);
          setSlideDirection(oppDirection);
          setSlideIn(true);
      }, 500);
  };

  useEffect(() => {
      const handleKeyDown = (e) => {
          if (e.keyCode === 39) {
              onArrowClick('right');
          }
          if (e.keyCode === 37) {
              onArrowClick('left');
          }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
          window.removeEventListener('keydown', handleKeyDown);
      };
  });
  /** carousel end **/
  
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

    return (
      <MediaQuery maxWidth={1000}>
        {matches => (
          <>
            <Helmet
              title={intl.formatMessage({ id: "title" })}
              meta={[
                { name: 'description for index', content: 'Sample for index' },
                { name: 'keywords for index', content: 'index' },
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
                  zIndex: 100
                }}
                
              >
                <Row>
                  <Col>
                    <Header
                      siteTitle={title}
                      sidebarDocked={!matches}
                    />
                  </Col>
                </Row>
              </AntdLayout.Header>
              
              {/* landing page */}
              <div style={{position:'relative', overflow:'hidden'}}>
                <div className="hero-image">
                </div>
                <div className="hero-text">
                  <div className="flexBox" style={{ width:'100vw', alignItems:'center', justifyContent:'center',marginBottom:'2rem'}}>
                    <img className="logo-img" src={Logo} alt=""/>
                    <span className='signaal-font' style={{margin:'auto 0.5rem', fontWeight:'700'}}>Signaal</span>
                  </div>
                  <p className="slogan" >{intl.formatMessage({ id: "landingSlogan" })}</p>
                  <p className="slogan" style={{marginBottom:'2rem'}}>{intl.formatMessage({ id: "landingSlogan2" })}</p>
                  <Link to="/demo">
                    <button
                    className="btn1"
                    >
                      {intl.formatMessage({ id: "Demo" })}
                    </button>
                  </Link>
                  <Link to="/docs/get-started/gs_install">
                    <button
                    className="btn2"
                    >
                      {intl.formatMessage({ id: "start" })}
                    </button>
                  </Link>                      
                </div>
              
                <a className='scroll-div' onClick={executeScroll}>
                    <div className='scroll'>
                      <div className="scrollIndicator">
                        <AiOutlineDown className="scrolldown"/>                            
                      </div>
                    </div>
                </a>
              </div>
              <div ref={myRef} ></div>
              <div style={{padding:'3rem 0'}}>
                <h1 style={{textAlign:'center', margin: '3rem'}}>{intl.formatMessage({ id: "signaalNotify" })}</h1>
                <div className='demo-box'>
                  <img style={{height:'100%'}} className='demo-img' data-aos="fade-up" data-aos-duration="1300" src={Demo} alt=""/>
                  <div style={{position:'relative'}} className='demo-text' >
                    <div data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000"  >
                      <p style={{marginTop:'1rem'}}>{intl.formatMessage({ id: "signaalNotifyContent" })}</p>
                    </div>
                    {/* <div data-aos-delay="200" data-aos="fade-up" data-aos-duration="1000"  >
                      <p >{intl.formatMessage({ id: "signaalNotifyContent2" })}</p>
                    </div> */}
                      {/* <img src={GroupMedia} className="dot" /> */}
                    {/* <img className="dot2" data-aos-delay="300" data-aos="fade-up" data-aos-duration="1500"  src={Dot2} /> */}

                  </div>
                </div>
                
              </div>

              <h1 style={{textAlign:'center', marginBottom:'3rem'}}>{intl.formatMessage({ id: "channel" })}</h1>
              <div  className="socialmedia">
                <Link className="socialmediaToggle" to="/docs/guide/ug_line">
                  <img src={Line}  />
                  <div>LINE {intl.formatMessage({ id: "document" })}</div>
                </Link>
                <Link className="socialmediaToggle" to="/docs/guide/ug_telegram">
                  <img src={telegram}  />
                  <div>Telegram {intl.formatMessage({ id: "document" })}</div>
                </Link>
                <Link className="socialmediaToggle" to="/docs/guide/ug_wechat">
                  <img src={WeChat}  />
                  <div>WeChat {intl.formatMessage({ id: "document" })}</div>
                </Link>
                <Link className="socialmediaToggle" to="/docs/guide/ug_viber">
                  <img src={Viber}  />
                  <div>Viber {intl.formatMessage({ id: "document" })}</div>
                </Link>
                <Link className="socialmediaToggle" to="/docs/guide/ug_whatsapp">
                  <img src={WhatsApp}  />
                  <div>WhatsApp {intl.formatMessage({ id: "document" })}</div>
                </Link>
                <Link className="socialmediaToggle" to="/docs/guide/ug_fb_messenger">
                  <img src={Messenger }  />
                  <div>Messenger {intl.formatMessage({ id: "document" })}</div>
                </Link>


              </div>
              <div style={{textAlign:'center', position:'relative', marginTop:'6rem'}}>
                {/* <h1 style={{color:'black', paddingBottom:'1rem'}}>Signaal</h1> */}
                <h1 className='phone-header' style={{color:'#bab8bd', margin:'3rem'}}>{intl.formatMessage({ id: "enterprise-solution" })}</h1>
                <div style={{width:'100%', height:'80%', background:'#F8F8F8', position: 'absolute', zIndex:'-1', top:'-10%'}}></div>
                <div style={{width:'100%', height:'100%', position:'absolute'}}></div>
               <iframe title='video' className="video-iframe" src="https://player.vimeo.com/video/477482525?autoplay=1&muted=1&loop=1&playbackRate=100" width="100%" height="500" frameborder="0" allowfullscreen allow="autoplay"></iframe>
               {/* <img src={Dot5} style={{left:'3rem', bottom:'1rem', width:'130px'}} className="dot" /> */}

              </div>

              <div className='feature'>
                <div data-aos="zoom-in" data-aos-delay="400" className='feature-div'>
                  <img className='feature-img' src={Dialogue} alt=""/>
                  <h3>{intl.formatMessage({ id: "featureHead" })}</h3>
                  <p>{intl.formatMessage({ id: "featureContent" })}</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="500" className='feature-div'>
                  <img className='feature-img' src={SMS} alt=""/>
                  <h3>{intl.formatMessage({ id: "featureHead2" })}</h3>
                  <p>{intl.formatMessage({ id: "featureContent2" })}</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="600" className='feature-div'>
                  <img className='feature-img' src={MobilePhone} alt=""/>
                  <h3>{intl.formatMessage({ id: "featureHead3" })}</h3>
                  <p>{intl.formatMessage({ id: "featureContent3" })}</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="700" className='feature-div'>
                  <img className='feature-img' src={SocialNetwork} alt=""/>
                  <h3>{intl.formatMessage({ id: "featureHead4" })}</h3>
                  <p>{intl.formatMessage({ id: "featureContent4" })}</p>
                </div>
              </div>
              <div style={{padding:'1rem'}}>
                <h1 style={{textAlign:'center', margin:'3rem'}}>{intl.formatMessage({ id: "product" })}</h1>
                <Projects/>
              </div>

              <div style={{textAlign:'center'}}>
                <Link to="/docs/get-started/gs_install">
                    <button
                    className="btn3"
                    >
                      {intl.formatMessage({ id: "start" })}
                    </button>
                </Link>  
              </div>


              <div className='App' style={{overflow:'hidden'}}>
                  
                  <Slide in={slideIn} direction={slideDirection}>
                      <div>
                          <CarouselSlide content={content} />
                      </div>
                  </Slide>
                  <div style={{display:'flex', marginBottom:'5rem'}}>
                    <Arrow
                        direction='left'
                        clickFunction={() => onArrowClick('left')}
                    />
                    <Arrow
                        direction='right'
                        clickFunction={() => onArrowClick('right')}
                    />
                  </div>

                  <Parallax className="custom-class" y={[-20, 10]} tagOuter="figure">
                  <img style={{width:'400px', marginBottom:'-30px', marginTop:'5rem'}} src={PhoneDemo} alt=""/>
                  </Parallax>
              </div>


              <div style={{backgroundColor:'#F8F8F8', padding:'1rem'}}>
                <h1 style={{textAlign:'center', marginTop:'2rem'}}>{intl.formatMessage({ id: "contact" })}</h1>
                <p style={{textAlign:'center'}}>{intl.formatMessage({ id: "contactParagraph" })}</p>
                <form method="POST" action="https://formspree.io/f/xaylbklb" className='form-div'>
                  <div className='row'>
                    <div className='col-md-6 paddingRight' >
                      <input type="text" placeholder={intl.formatMessage({ id: "name" })} name="name" className='form-control-p'></input>
                    </div>
                    <div className='col-md-6 paddingLeft'>
                      <input type="text" placeholder={intl.formatMessage({ id: "email" })} name="email" className='form-control-p'></input>
                    </div>
                    <div className='col-md-12'>
                      <input type="text" placeholder={intl.formatMessage({ id: "subject" })} name="subject" className='form-control-p'></input>
                    </div>
                    <div className='col-md-12'>
                      <textarea rows="10" className='form-control-p' name="message" placeholder={intl.formatMessage({ id: "message" })}></textarea>
                    </div>
                  </div>
                  <button type="submit" className='btn3'>{intl.formatMessage({ id: "send" })}</button>
                </form>
              </div>
              <footer className="nav-footer" id="footer">
                <div style={{textAlign:'center', fontSize:'14px'}}>
                Copyright © {new Date().getFullYear()} Signaal.me
                </div>
              </footer>
            </AntdLayout>
          </>
        )}
      </MediaQuery>
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

export default connect(mapStateToProps)(IndexPage)
