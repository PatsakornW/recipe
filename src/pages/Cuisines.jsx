import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import food_th from "../assets/cuisines_thai.png";
import food_us from "../assets/cuisines_american.png";
import food_jp from "../assets/cuisines_japan.png";
import food_mx from "../assets/cuisines_mexican.png";



function Cuisines() {
    const { name } = useParams()
    const [cuisinces, setCuisinces] = useState([])
    const [error, setError] = useState(null);




    useEffect(() => {
        getCuisines();
    }, [name])

    function getCuisines() {
        const checkCuisines = localStorage.getItem('cuisines');

        if (checkCuisines) {
            setCuisinces(JSON.parse(checkCuisines));

        }
        else {
            axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&number=8&apiKey=${import.meta.env.VITE_API_KEY_RECIPE}`)
                .then(function (response) {
                    localStorage.setItem('cuisines', JSON.stringify(response.data.results));

                    setCuisinces(response.data.results);
                })
                .catch(function (error) {
                    console.log(error);
                    setError(error);
                })
        }


    }


    return (
        <motion.div
            className='mt-0 lg:mt-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <div className='grid grid-cols-2 cursor-default'>
                <div className='flex justify-center md:justify-end  items-center col-span-2 md:col-span-1 mt-10 lg:mt-0 ms-0 lg:ms-10'>
                    <div
                        className=' text-4xl leading-tight text-center md:text-start lg:text-6xl'>
                        <div className='font-serif mt-0  lg:mt-10 '>
                            <p >CUISINES</p>
                            {name === 'Thai' ? (<p className=' bg-gradient-to-r from-red-500  via-blue-400  to-slate-100  text-transparent bg-clip-text'>{name.toUpperCase()}</p>) : ('')}
                            {name === 'American' ? (<p className=' bg-gradient-to-r from-blue-600  via-red-500  to-slate-400  text-transparent bg-clip-text'>{name.toUpperCase()}</p>) : ('')}
                            {name === 'Japanese' ? (<p className=' bg-gradient-to-r from-red-600  via-red-500  to-slate-400  text-transparent bg-clip-text'>{name.toUpperCase()}</p>) : ('')}
                            {name === 'Mexican' ? (<p className=' bg-gradient-to-r from-green-700  via-red-600  to-slate-400  text-transparent bg-clip-text'>{name.toUpperCase()}</p>) : ('')}

                        </div>
                    </div>
                </div>

                <div className='flex justify-start ms-10'>
                    {name === 'Thai' ? (<img className='w-1/2 hidden md:block' src={food_th} alt="Thai" />) : ('')}
                    {name === 'American' ? (<img className='w-1/2 hidden md:block' src={food_us} alt="American" />) : ('')}
                    {name === 'Japanese' ? (<img className='w-1/2 hidden md:block' src={food_jp} alt="Japanese" />) : ('')}
                    {name === 'Mexican' ? (<img className='w-1/2 hidden md:block' src={food_mx} alt="Mexican" />) : ('')}



                </div>
            </div>


            <div >
                {error ? (
                    <div className='flex  justify-center p-5 '>
                        <div className="alert alert-error w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='break-all'>{error.message}</span>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-wrap justify-center  gap-5 mx-0 xl:mx-60 p-5 '>
                        {
                            cuisinces.map((item) => (
                                <Link to={`/recipe/${item.id}`} key={item.id} className='flex hover:-translate-y-1 hover:duration-300 hover:shadow-md rounded-xl delay-75  hover:bg-secondary hover:text-white'>
                                    <div
                                        className="rounded-xl w-full md:w-56  px-3 pt-3 pb-3  border border-base-300 flex flex-row md:flex-col"

                                    >
                                        <img class="w-1/3 md:w-full rounded-xl" src={item.image} />
                                        <div className="w-full h-full  flex flex-col ml-2 md:ml-0 items-center justify-center ">
                                            <div class="mt-0 lg:mt-3 font-bold break-all text-sm md:text-base">{item.title}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                )}
            </div>


        </motion.div>
    )
}

export default Cuisines