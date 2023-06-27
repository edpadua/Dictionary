import React from 'react'

import { BsBook } from "react-icons/bs"

import Search from '../Search'

function Navbar() {
  return (
    <nav className="bg-sky-600 top-0 left-0 right-0 w-full h-24 pt-8">
      <div className='container mx-auto px-8 flex'>
        <BsBook className="flex-none mr-2" style={{ fontSize: '40px', color: "#ffffff" }}/>
        <Search />
      </div>

    </nav>
  )
}

export default Navbar
