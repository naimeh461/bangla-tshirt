import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import "./Home.css"
import toast from 'react-hot-toast';
const Home = () => {
    const tShirts = useLoaderData();
    const [cart,setCart] = useState([])

    const handleAddToCart = tShirt =>{
        const exists = cart.find(ts => ts._id === tShirt._id)
        if(exists)
        {
            toast("you have already added this t-shirt")
        }
        else
        {
            const newCart = [...cart,tShirt];
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tShirts.map(tShirt => <Tshirt
                key = {tShirt._id}
                tShirt = {tShirt}
                handleAddToCart ={handleAddToCart}
                ></Tshirt>)
            }
            </div>
            <div className='cart-container'>
                <Cart
                key = {cart._id}
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
                
            </div>
        </div>
    );
};

export default Home;