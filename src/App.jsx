import { useState, useEffect } from 'react'
import './App.css'

// State Management & APIs 
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts, fetchSingleCart } from './slices/cartsSlice';
import { fetchUsers, fetchSingleUser } from './slices/usersSlice';
import { login } from './slices/authSlice';

// Pages 
import BuyersDashboard from './pages/BuyersDashboard';

function App() {

  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const users = useSelector((state) => state.user.users);
  const auth = useSelector((state) => state.auth.auth);



  return (
    <>
      <BuyersDashboard/>
    </>
  )
}

export default App
