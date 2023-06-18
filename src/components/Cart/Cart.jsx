import React from 'react'
import './Cart.css'

function Cart({product, totalProd, totalMoney}){
    function totalPriceAndProducts(e) {
        totalProd()
        totalMoney(product.price)
    }
    return (
        <div className='cart'>
            <div className='product-box'>
                <p className='product'>{product.id}</p>
            </div>
            <p className='product'>{product.name}</p>
            <p className='product'>{product.price}</p>
            
            <div className='product'>
                <img className='img-product' src={product.imageUrl}/>  

            <button className='btn-add' onClick={totalPriceAndProducts}>Add product</button>
            </div>
            
        </div>
    ) 
}


export default Cart