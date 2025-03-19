import { useState, useEffect } from 'react'
import './product.css'


export default function Product(props) {

    const product = props.product;

    // Truncating the product title if it exceeds a certain length 
    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
          str.slice(0, maxlength - 1) + '…' : str;
      }

  return (
    <div className='productDiv'>
      <div className='favBtnContainer'>
        <div className='favBtn'>
            <img src='https://img.icons8.com/?size=100&id=87&format=png&color=ffffff' alt='Add to Favourite'/>
        </div>
      </div>
      <div className='productImage'>
        <img src={product.image} alt='Product'/>
      </div>
      <div className='productPrice'>
        <img src='https://img.icons8.com/?size=100&id=123120&format=png&color=14199C' alt='Naira'/>
        <div>{product.price}</div>
      </div>
      <div className='productTitle'>
        {truncate(product.title, 40)}
      </div>
    </div>
  )
}


