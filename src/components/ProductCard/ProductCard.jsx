import React from 'react'
import './ProductCard.css'


function ProductCart (cart){
    return (
        <div className='cart'>
            <p className='cart'> {cart.id} </p>
            <p className='cart'>{cart.name}</p>
            <p className='cart'>{cart.price}</p>
            <p className='cart'>{cart.imageUrl}</p>
            <button>Add product</button>
        </div>
    )
}


export default ProductCart