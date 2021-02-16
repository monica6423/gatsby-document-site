import React from 'react'
import MediaQuery from 'react-responsive'
import useProgressiveImg from '../components/useProgressiveImg'
//import { Link } from 'gatsby'
import { default as AntdLayout } from 'antd/lib/layout'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Header from '../components/Header/HeaderDoc'
import Helmet from 'react-helmet'
import customerPortal from './CustomerPortal.png'
import featurOne from './f1.png'
import featureTwo from './f2.png'
import featureThree from './f3.png'
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import useTitle from '../components/Title';
import demo from './demo.css'
import WrappedDemoForm from '../components/Form/DemoForm'
import Container from '../components/Container/ContainerTailor'


const DemoPage = () => {
  const intl = useIntl();
  const title = useTitle();
  const [src, blur] = useProgressiveImg(customerPortal);
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
          {/* main demo form */}
          <Container>
          <div style={{ display:'flex', minHeight:'100%', marginTop:'2rem', width:'100vw',flexWrap:'wrap'}}>
            <div className='request-demo' >
              <div className="left-demo">
              <h1>{intl.formatMessage({ id: "demoSlogan" })}</h1>
                <p>{intl.formatMessage({ id: "demoContent" })}</p>
                <div style={{textAlign:"right"}}>
                  <img 
                  src={src} 
                  style={{
                    filter: blur
                      ? "blur(20px)"
                      : "none",
                    transition: blur
                      ? "none"
                      : "filter 0.3s ease-out"
                  }}
                  className="portal-demo-img" 
                  alt=""/>
                </div>
              </div>
            </div>
            <div className="request-demo">
              <div className='demo-form'>
                <WrappedDemoForm int={intl.locale}/>
              </div>
            </div>
          </div>
          <div style={{backgroundColor:'#F8F8F8', padding: '1rem'}}>
            <div className="second-slogan">
              <h1>{intl.formatMessage({ id: "demoWhy" })}</h1>
            </div>
          {/* feature */}
            <div className="DemoFeatures">
              <div className="DemoFeature">
                <img className="DemoFeature-img" src={featurOne} alt=""/>
                <div className="DemoFeature-text">
                  <p>
                  {intl.formatMessage({ id: "demoFeature" })}                  
                  </p>
                </div>
              </div>
              <div className="DemoFeature">
                <img className="DemoFeature-img" src={featureTwo} alt=""/>
                <div className="DemoFeature-text">
                  <p>
                  {intl.formatMessage({ id: "demoFeature2" })}
                  </p>
                </div>
              </div>
              <div className="DemoFeature">
                <img className="DemoFeature-img" src={featureThree} alt=""/>
                <div className="DemoFeature-text">
                  <p>
                  {intl.formatMessage({ id: "demoFeature3" })}
                  </p>
                </div>
              </div>
            </div>
            </div>
            </Container>
        </AntdLayout>
          </>
        )}
      </MediaQuery>
  )
}

export default DemoPage

