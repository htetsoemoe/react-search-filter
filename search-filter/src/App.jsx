import React from 'react'
import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Recommended from './components/recommended/Recommended'
import products from './data/data.js'
import Card from './components/card/Card'
import CardGrid from './components/card/CardGrid'

const App = () => {

  // Input filter in Navbar
  const [query, setQuery] = useState("")

  const handleInputChange = (event) => {
    setQuery(event.target.value)
    console.log(event.target.value, query)
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

  // filter product with input value
  const filteredItem = products.filter((product) =>
    //product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    product.title.toLowerCase().includes(query.toLowerCase())
  )

  // function for filter product with input, radio and buttons
  function filteredData(products, selected, query) {
    let filterProducts = products

    // Filtering Input Items
    if (query) {
      filterProducts = filteredItem
    }

    // Applying Selected Filter
    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      )
    }

    return filterProducts.map(
      ({ img, title, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    )

  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <div className='max-w-[1400px] mx-auto mt-5 flex'>
      <Sidebar handleChange={handleChange} />
      <div className="flex flex-col">
        <Navbar handleInputChange={handleInputChange} query={query} />
        <Recommended handleClick={handleClick} />
        <CardGrid result={result} />
      </div>
    </div>
  )
}

export default App
