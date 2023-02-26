import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Footer() {
  const [value,setValue] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    // setValue('')
    
  }


  return (
    <footer className='footer'>
      <p className='f-text'>&#169; 2023 - The Bamboo Coder</p>
      <form>
        <div className='search'>
          <input placeholder='Search' className='searchbar' value={value} onChange={e => {setValue(e.target.value)}}/>
          <Link href={{
            pathname: '/search',
            query: {value},
          }} className='mag-con'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='magGlass'/>
          </Link>
        </div>
      </form>
    </footer>
  )
}
