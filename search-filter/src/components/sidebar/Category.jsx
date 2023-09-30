import React from 'react'

const Category = ({ handleChange }) => {
    return (
        <div className=''>
            <div className="flex flex-col w-48 gap-2 bg-slate-200 rounded-lg pl-5 p-3 mb-3">
                <h1 className="text-xl font-bold mb-2">Category</h1>
                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" name="test" value="all" id="all" />
                    <label htmlFor='all' className="">All</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="sneakers" id='sneakers' title='Sneakers' name='test' />
                    <label htmlFor='sneakers' className="">Sneakers</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="flats" id='flats' title='flats' name='test' />
                    <label htmlFor='flats' className="">Flats</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="sandals" id='sandals' title='sandals' name='test' />
                    <label htmlFor='sandals' className="">Sandals</label>
                </div>

                <div className="flex gap-2 font-semibold">
                    <input onChange={handleChange} type="radio" value="heels" id='heels' title='heels' name='test' />
                    <label htmlFor='heels' className="">Heels</label>
                </div>
            </div>
        </div>
    )
}

export default Category
