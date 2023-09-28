import React from 'react'
import Category from './Category'
import Prices from './Prices'
import Colors from './Colors'

const Sidebar = ({ handleChange }) => {
    return (
        <>
            <section className="max-w-[250px] p-5">
                <div className="">
                    <h1></h1>
                </div>
                <Category handleChange={handleChange} />
                <Prices handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        </>
    )
}

export default Sidebar
