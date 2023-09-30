import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

const Navbar = ({ handleInputChange, query }) => {
    return (
        <nav className='flex'>
            <div className="px-4 bg-gray-200 rounded-full ml-36 mr-80">
                <input type="text" className='bg-transparent p-2 w-full focus:outline-none'
                    onChange={handleInputChange}
                    value={query}
                    placeholder='Enter your search shoes.' />
            </div>
            <div className="flex items-center w-[500px]">
                <a href="#" className='mr-5'>
                    <FiHeart size={25} />
                </a>
                <a href="#" className='mr-5'>
                    <AiOutlineShoppingCart size={25} />
                </a>
                <a href="#" className='mr-5'>
                    <AiOutlineUserAdd size={25} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
