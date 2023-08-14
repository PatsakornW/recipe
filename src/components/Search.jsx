import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {
    const [input, setinput] = useState("")
    const navigate = useNavigate();

    function Search_submit(e) {
        e.preventDefault();
        navigate(`/search/${input}`);
        setinput('')

    }


    return (
        <form onSubmit={Search_submit}>
            <div className=' relative '>
                <input
                    type='text'
                    className=' input w-full bg-base-100 pl-10 pr-3'
                    placeholder=' Search only " thai "'
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                />
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
            </div>


        </form>

    )
}

export default Search