import React from 'react'
import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Radio Button Filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
    console.log(event.target.value);
  }

  return (
    <div className='max-w-[1400px]  mx-auto mt-3'>
      <Sidebar handleChange={handleChange} />
    </div>
  )
}

export default App
