import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignIn from './components/SignIn'
import Products from './components/Products'
import LogIn from './components/LogIn'
import Cart from './components/Cart'
import Confirmation from './components/Confirmation'
import ProductInfo from './components/ProductInfo'

function App() {
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signUp' element={<SignIn />} />
        <Route path='/products' element={<Products cart={cart} setCart={setCart} />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/confirmation' element={<Confirmation cart={cart} />} />
        <Route path='/product/:id' element={<ProductInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
