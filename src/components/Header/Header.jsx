import React from 'react'


function Header({ name }) {

  return (
        <>
        <div className='container'>
            
            <div className='header-box'>
                <div className='header'>{name}</div>
            </div>
        </div>
        </>
  )
}

export default Header
