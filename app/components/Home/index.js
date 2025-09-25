import React from 'react'
import Suppliers from './Suppliers'
import Products from './Products'
import Cart from '../Cart/Cart'
const Home = () => {
  return (
    <main className='w-full pb-10 container  mx-auto flex flex-col gap-10 p-10'>
     
    <Suppliers/>
    <Products/>
    <Cart/>
    </main>
  )
}

export default Home