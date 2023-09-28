import React from 'react'

const Prices = ({ handleChange }) => {
    return (
        <div className=''>
            <div className="flex flex-col gap-2 bg-slate-200 rounded-lg pl-5 p-3 mb-3">
                <h1 className="text-xl font-bold mb-2">Price</h1>
                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="" id="price" name='test' />
                    <label htmlFor='price' className="">All</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="50" id='50' name='test' />
                    <label htmlFor='50' className="">$0 - $50</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="100" id='100' name='test' />
                    <label htmlFor='100' className="">$50 - $100</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="150" id='150' name='test' />
                    <label htmlFor='150' className="">$100 - $150</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="200" id='200' name='test' />
                    <label htmlFor='200' className="">Over $150</label>
                </div>
            </div>
        </div>
    )
}

export default Prices
