import React from 'react'
import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Recommended from './components/recommended/Recommanded'

const App = () => {

  // Input filter in Navbar
  const [query, setQuery] = useState("")

  const handleInputChange = (event) => {
    setQuery(event.target.value)
    console.log(event.target.value)
  }

  // Radio Button Filtering
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
    console.log(event.target.value);
  }

  // Button Filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className='max-w-[1400px] mx-auto mt-5 flex'>
      <Sidebar handleChange={handleChange} />
      <div className="flex flex-col">
        <Navbar handleInputChange={handleInputChange} query={query} />
        <Recommended handleClick={handleClick} />
      </div>
    </div>
  )
}

export default App
