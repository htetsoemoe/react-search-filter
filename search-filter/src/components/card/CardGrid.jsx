import React from 'react'

const CardGrid = ({ result }) => {
    return (
        <div className='grid grid-cols-4 gap-5 ml-20 mt-10 mb-10'>
            {result}
        </div>
    )
}

export default CardGrid
