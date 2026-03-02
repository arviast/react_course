import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Homepage'
import { Checkout } from './pages/Checkout'
import { Tracking } from './pages/Tracking'
import { Orders } from './pages/Orders'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
            .then((response) => {
                setCartItems(response.data);
        });
  },[]);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cartItems={cartItems} />} />
        <Route path="checkout" element={<Checkout cartItems={cartItems}/>} />
        <Route path="orders" element={<Orders />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  )
}

export default App
