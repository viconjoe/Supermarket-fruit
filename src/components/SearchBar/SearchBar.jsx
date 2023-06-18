import React from 'react'
import './SearchBar.css'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'


function SearchBar () {

const valor = useContext(SearchContext)

    return (
        <>
        <div className='container'>
            <input type='text' onChange={(e)=> {valor.setSearchContext(e.target.value)} }/>
            <p>{valor.searchContext}</p>
        </div>
        </>
    )
}



export default SearchBar