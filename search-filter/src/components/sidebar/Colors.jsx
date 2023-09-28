import React from 'react'

const Colors = ({ handleChange }) => {
    return (
        <div className=''>
            <div className="flex flex-col gap-2 bg-slate-200 rounded-lg pl-5 p-3 mb-3">
                <h1 className="text-xl font-bold mb-2">Color</h1>
                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="" id="color" name='test' />
                    <label htmlFor='color' className="">All</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="black" id='black' name='test' />
                    <label htmlFor='black' className="">Black</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="blue" id='blue' name='test' />
                    <label htmlFor='blue' className="">Blue</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="red" id='red' name='test' />
                    <label htmlFor='red' className="">Red</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="green" id='green' name='test' />
                    <label htmlFor='green' className="">Green</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="white" id='white' name='test' />
                    <label htmlFor='white' className="">White</label>
                </div>
            </div>
        </div>
    )
}

export default Colors
