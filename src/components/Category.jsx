import React from 'react'
import {Link } from 'react-router-dom'

function Category() {
    return (
        <div className='flex justify-center gap-3 pt-5'>
            <Link to={'cuisines/Thai'}>
                <button className="btn btn-outline btn-xs sm:btn-sm">Thai</button>
            </Link>
            <Link to={'cuisines/American'}>
                <button className="btn btn-outline btn-xs sm:btn-sm">American</button>
            </Link>
            <Link to={'cuisines/Japanese'}> 
                <button className="btn btn-outline btn-xs sm:btn-sm">Japanese</button>
            </Link>
            <Link to={'cuisines/Mexican'}>
                <button className="btn btn-outline btn-xs sm:btn-sm">Mexican</button>
            </Link>
        </div>
    )
}

export default Category