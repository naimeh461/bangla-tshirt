import React from 'react';
import "./Tshirt.css"
const Tshirt = ({tShirt,handleAddToCart}) => {
    const {picture,name,price,id}= tShirt
    return (
        <div className='tShirt-container'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price : {price}</h5>
            <button onClick={() => handleAddToCart(tShirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;