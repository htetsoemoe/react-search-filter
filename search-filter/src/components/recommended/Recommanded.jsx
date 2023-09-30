import React from 'react'

const Recommended = ({ handleClick }) => {
    return (
        <div className='ml-20 mt-10'>
            <h2 className="text-xl font-semibold mb-5">Recommended</h2>
            <div className="flex gap-5">
                <button onClick={handleClick}
                    value=""
                    className='px-5 py-2 bg-slate-300 rounded font-semibold hover:bg-slate-400'>
                    All Products
                </button>
                <button
                    onClick={handleClick}
                    value="nike"
                    className='px-5 py-2 bg-slate-300 rounded font-semibold hover:bg-slate-400'>
                    Nike
                </button>
                <button onClick={handleClick}
                    value="adidas"
                    className='px-5 py-2 bg-slate-300 rounded font-semibold hover:bg-slate-400'>
                    Adidas
                </button>
                <button onClick={handleClick}
                    value="puma"
                    className='px-5 py-2 bg-slate-300 rounded font-semibold hover:bg-slate-400'>
                    Puma
                </button>
                <button onClick={handleClick}
                    value="vans"
                    className='px-5 py-2 bg-slate-300 rounded font-semibold hover:bg-slate-400'>
                    Vans
                </button>
            </div>
        </div>
    )
}

export default Recommended
