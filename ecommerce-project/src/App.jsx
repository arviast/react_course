import { Routes, Route } from 'react-router'
import { HomePage } from './pages/home/Homepage'
import { Checkout } from './pages/checkout/Checkout'
import { Tracking } from './pages/Tracking'
import { Orders } from './pages/orders'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response =  await axios.get('/api/cart-items?expand=product')
      setCartItems(response.data);
    }
    fetchAppData();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cartItems={cartItems} />} />
        <Route path="checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="orders" element={<Orders cartItems={cartItems} />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  )
}

export default App
