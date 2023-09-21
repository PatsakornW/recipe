import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import food_th from "../assets/cuisines_thai.png";
import food_us from "../assets/cuisines_american.png";
import food_jp from "../assets/cuisines_japan.png";
import food_mx from "../assets/cuisines_mexican.png";
import Card from '../components/card';
import Error from '../components/error';



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
            axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&number=9&apiKey=${import.meta.env.VITE_API_KEY_RECIPE}`)
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
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <div className='grid grid-cols-2 cursor-default'>
                <div className='flex justify-center md:justify-end  items-center col-span-2 md:col-span-1 mt-5 lg:mt-0  '>
                    <div
                        className=' text-4xl leading-tight text-center md:text-start lg:text-6xl'>
                        <div className='font-serif '>
                            <p >CUISINES</p>
                            {name === 'Thai' ? (<p className=' bg-gradient-to-r from-red-500  via-blue-400  to-slate-100  text-transparent bg-clip-text'>{name.toUpperCase()}</p>) : ('')}
                            {name === 'American' ? (<p className=' bg-gradient-to-r from-blue-600  via-red-500  to-slate-400  text-transparent bg-clip-text'>{name.toUpperCase()}</p>) : ('')}
                            {name === 'Japanese' ? (<p className=' bg-gradient-to-r from-red-600  via-red-500  to-slate-400  text-transparent bg-clip-text'>{name.toUpperCase()}</p>) : ('')}
                            {name === 'Mexican' ? (<p className=' bg-gradient-to-r from-green-700  via-red-600  to-slate-400  text-transparent bg-clip-text'>{name.toUpperCase()}</p>) : ('')}

                        </div>
                    </div>
                </div>

                <div className='flex justify-start ms-5'>
                    {name === 'Thai' ? (<img className='w-2/5 hidden md:block' src={food_th} alt="Thai" />) : ('')}
                    {name === 'American' ? (<img className='w-2/5 hidden md:block' src={food_us} alt="American" />) : ('')}
                    {name === 'Japanese' ? (<img className='w-2/5 hidden md:block' src={food_jp} alt="Japanese" />) : ('')}
                    {name === 'Mexican' ? (<img className='w-2/5 hidden md:block' src={food_mx} alt="Mexican" />) : ('')}
                </div>
            </div>


            <div >
                {error ? (
                     <Error error={error}/>
                ) : (
                    <div className='flex flex-wrap justify-center  gap-4 mx-0 xl:mx-60 p-3 '>
                        {
                            cuisinces.map((item) => (
                                <Link to={`/recipe/${item.id}`} key={item.id}>
                                    <Card title={item.title} image={item.image}/>
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