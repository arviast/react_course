import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/Homepage'
import { Checkout } from './pages/checkout/checkout'
import { Tracking } from './pages/tracking'
import { Orders } from './pages/orders'
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
        <Route path="orders" element={<Orders cartItems={cartItems}/>} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  )
}

export default App
