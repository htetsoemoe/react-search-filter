import React from 'react'
import Category from './Category'
import Prices from './Prices'
import Colors from './Colors'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Sidebar = ({ handleChange }) => {
    return (
        <>
            <section className="max-w-[250px] p-5 pt-0 h-screen left-0 top-0">
                <div className="">
                    <h1 className='flex items-center pl-5 pb-5'>
                        <AiOutlineShoppingCart size={30} />
                    </h1>
                </div>
                <Category handleChange={handleChange} />
                <Prices handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        </>
    )
}

export default Sidebar
