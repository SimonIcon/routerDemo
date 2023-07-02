import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-black flex  text-white justify-evenly w-full h-[40px]'>
            <div>
                <h2 className='uppercase'>symohdev</h2>
            </div>
            <div className='w-[60vw] justify-between text-white'>
                <Link to="/">Home Page</Link>
                <Link to="products">products</Link>
                <Link to="deliveries">Deliveries</Link>
                <Link to="login">login</Link>
            </div>
        </div>
    )
}

export default Navbar