import React, { useState, useEffect } from 'react';
import { Link, injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { getProductState } from '../store/selectors'

import { connect } from 'react-redux'


const productList = [
    {
        "name":"Whatsup Gold",
        "id":"wug"   
    },
    {
        "name":"NetApp",
        "id":"na"
    },
    {
        "name":"PaloAlto",
        "id":"pa"
    }
]
  
const ProductList = (props) => {
    const { product } = props;
    return (
        <ul className="product-ul">
            {productList.map( item => {
                return (
                <li 
                    onClick={() => props.handleProduct(item.id)} 
                    key={item.id}
                    style={{
                        margin: 5,
                        fontSize: '14px',
                        color: item.id === product ? `white` : `black`,
                        backgroundColor: item.id === product ? `#053225`:`white`
                    }}
                    >
                    {item.name}
                </li>
                )
            })}
        </ul>
    );
};

const mapStateToProps = state => {
    return {
      product: getProductState(state).product,
    }
  }

export default connect(
    mapStateToProps
  )(ProductList);