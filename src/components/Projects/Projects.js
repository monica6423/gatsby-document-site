import React, { useEffect } from 'react';
import Pic1 from './pic1.jpg';
import Pic2 from './pic2.jpg';
import Pic3 from './pic3.jpg';
import WUG from './WUG.png';
import PA from './PA2.jpg';
import NA from './NA2.jpg';

import AOS from 'aos';
import { useIntl} from "gatsby-plugin-intl"
import 'aos/dist/aos.css';


const Projects = () => {
      const intl = useIntl()

      useEffect(() => {
        AOS.init({
          once: true
        });
      }, []);
      return (
        <div className="flex-container">
          <div className="flex-item flex-cover" data-aos-duration="500" data-aos-delay="200" data-aos="fade-right" style={{margin:'1rem 0'}}>
            <img alt="" src={WUG} style={{ width:'90%', objectFit:'contain',  height:'100%'}} />
            <div className="flex-text" >
                <h3 style={{marginBottom:'1.5rem'}}>Signaal for Whatsup Gold</h3>
                <p>{intl.formatMessage({ id: "integration" })}</p>
            </div>
          </div>

          <div className="flex-item">
            <div className="flex-inner flex-cover m-0001" style={{display:'flex', justifyContent:'center'}} data-aos-duration="500" data-aos-delay="300" data-aos="fade-left">
              <img alt="" src={NA} style={{objectFit:'cover', width:'100%', height:'100%', textAlign:'center'}} className='ig-item-icon'/>
              <div className="flex-text">
                <h3 style={{marginBottom:'1.5rem', color: 'white'}}>Signaal for NetApp</h3>
                <p style={{ color: 'white'}}>{intl.formatMessage({ id: "integration" })}</p>
              </div>
            </div>

            <div className="flex-inner flex-cover m-1001 product-animation" data-aos-duration="500" data-aos-delay="300" data-aos="fade-left">
              <img alt="" src={PA} style={{objectFit:'cover', width:'100%', height:'100%'}} className='ig-item-icon'/>
              <div className="flex-text">
                <h3 style={{marginBottom:'1.5rem', color: 'white'}}>Signaal for PaloAlto</h3>
                <p style={{ color: 'white'}}>{intl.formatMessage({ id: "integration" })}</p>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Projects
