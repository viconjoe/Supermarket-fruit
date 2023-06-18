import { useState, useContext } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import products from './assets/products.json'
import ProductList from './components/ProductList/ProductList'
import SearchBar from './components/SearchBar/SearchBar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { SearchContext } from './context/SearchContext'




function App() {
  const valorPorDefecto = useContext(SearchContext)
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  const [searchContext, setSearchContext] = useState('')
  const objectSearch =  {searchContext, setSearchContext}
  console.log(searchContext)
  const handleCount = () => {
    setCount(count + 1)
    }
  const handleprice = (productPrice) => {
      setPrice (price + productPrice) 
  }

  function resetCount () {
       setCount(0)
       setPrice(0)
  }


  
  return (
    <>
    <SearchContext.Provider value={objectSearch}>
      <div className='container'>

        <div className='header-box'>
          <Header className='header' name='Mr Superwonderful'/> 
        </div>  

        <div className='search-bar'>
          <br></br>
          <h2>Search </h2><SearchBar/>
        </div>
      
        <div className='list'>
          <ProductList carts={products} totalProducts={handleCount} totalPrice= {handleprice} />
        </div>

        <div className='three-bnts'>
          <div className='total-btn-sales'>
            <p className='text-product'>Total Products: {count}</p>
          </div>
          
          <div className='total-price-box'>
            <p className='text-product'>Total price: {price}  €</p>
          </div>

          <div className='reset-btn'>
            <a href="#" className='myButton' onClick={ resetCount }>Reset Count</a>
          </div>
        </div>
      </div>
    </SearchContext.Provider>

    </>
  )
}

export default App
