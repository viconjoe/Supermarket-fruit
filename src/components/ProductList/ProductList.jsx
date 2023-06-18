import React from 'react'
import './ProductList.css'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'


function ProductList({carts, totalProducts, totalPrice}) {
    const inputSearch = useContext(SearchContext)
    console.log(inputSearch.searchContext)
    return (carts
        .filter((cart) =>  cart.name.toLowerCase().includes(inputSearch.searchContext.toLowerCase()))
        .map((cart, idx) => {
        
        return <Cart key= {idx} product ={cart} totalProd={totalProducts} totalMoney= {totalPrice} />
    }))
    
}


export default ProductList