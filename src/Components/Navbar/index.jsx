import React from 'react'

import {BsBook} from "react-icons/bs" 

import Search from '../Search'

function Navbar() {
  return (
    <nav className="bg-sky-600 top-0 left-0 right-0 w-full h-24 px-20 pt-8">
      <Search />
    </nav>
  )
}

export default Navbar
