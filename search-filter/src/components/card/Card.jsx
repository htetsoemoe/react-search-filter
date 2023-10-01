import React from 'react'
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
    //console.log({ img, title, reviews, prevPrice, newPrice });
    return (
        <div className="bg-zinc-800 max-w-[300px] flex-col rounded px-10 py-5" >
            <img src={img} alt={title} className="w-[100px] h-[80px] rounded " />
            <h1 className='text-white mt-3 mb-3'>{title}</h1>
            <div className="flex items-center">
                <div className="mr-10 text-yellow-500 text-md">
                    <span className='line-through mr-3'>{prevPrice}</span>
                    <span className="text-xl">${newPrice}</span>
                </div>
                <div className="">
                    <BsFillBagFill className='text-white' />
                </div>
            </div>
        </div>
    )
}

export default Card
