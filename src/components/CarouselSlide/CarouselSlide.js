import React from 'react';
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

export default function CarouselSlide(props) {
    const { title } = props.content;
    const intl = useIntl()
  

   

    return (
        <div style={{width:'70vw', padding: '75px 50px', margin: '0px 25px',display: 'flex',justifyContent: 'center'}}>
            <h3 className="font">{intl.formatMessage({ id: title })}</h3>
        </div>
    );
}