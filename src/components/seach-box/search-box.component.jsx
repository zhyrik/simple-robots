import React from 'react'
import './search-box.style.css'

export default function SearchBox({ placeholder, getInputValue}) {
    return (
        <input 
            className='search'
            type="search" 
            placeholder={placeholder}
            onChange={e => getInputValue(e)}/>
    )
}
