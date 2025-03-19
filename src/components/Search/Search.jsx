import { useState, useEffect } from 'react'
import './search.css'

export default function Search() {
  return (
    <div className='search'>
        <div className='brand'>
            FAKESTORE
        </div>
        <div className='searchbar'>
            <div className='searchbarIcon'>
                <img src='https://img.icons8.com/?size=100&id=59878&format=png&color=BFBFBF' alt='Search'/>
            </div>
            <input type='text' className='searchInput'/>
            <select className='searchDropdown'>
                <option>Cars</option>
                <option>Homes</option>
                <option>Appliances</option>
            </select>
        </div>
    </div>
  )
}


