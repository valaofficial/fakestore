import { useState, useEffect } from 'react'
import './sidebar.css'

import { useSelector, useDispatch } from 'react-redux';
import {fetchProducts, fetchProductsByCategory } from '../../slices/productsSlice';
import { fetchCategories } from '../../slices/categoriesSlice';


export default function Sidebar() {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);


    // Getting List of All Products 
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // console.log(categories)

    const getCategory = (e) =>{
      dispatch(fetchProductsByCategory(e.target.innerHTML));
    }

  return (
    <div className='sidebarDiv'>
      <div className='filters'>
        <div className='categories'>
            <div onClick={() => dispatch(fetchProducts())} className='categoriesFilterTitle'>Categories</div>
            {categories ? 
            categories.map((category) => {
                return(
                    <div onClick={getCategory} key={category} className='category'>{category}</div>
                )
            })
            : null}
        </div>
      </div>
    </div>
  )
}


