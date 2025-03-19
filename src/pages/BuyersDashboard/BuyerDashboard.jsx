import { useState, useEffect } from 'react'
import './buyersdashboard.css'

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchSingleProduct } from '../../slices/productsSlice';

// Components 
import Sidebar from '../../components/Sidebar';
import Product from '../../components/Product';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';


export default function BuyersDashboard() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);


    // Getting List of All Products 
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // console.log(products)

  return (
    <>
      <Navbar/>
      <Search/>
      <div className='buyersDashboard'>
        <div className='sideBarContainer'>
          <Sidebar/>
        </div>
        <div className='productsContainer'>
          {products?
            products.map(product => <Product key={product.id} product={product}/>)
          :null}
        </div>
      </div>
    </>
  )
}


