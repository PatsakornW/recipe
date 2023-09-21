import axios from 'axios'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import food from "../assets/chef2.png";
import Card from './card';
import Error from './error';

function All_recipe() {
    const [allRecipe, setallRecipe] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        getallRecipe();
    }, [])

    function getallRecipe() {
        const check = localStorage.getItem('allRecipe');
        if (check) {
            setallRecipe(JSON.parse(check));
        } else {
            axios.get(`https://api.spoonacular.com/recipes/random?number=9&apiKey=${import.meta.env.VITE_API_KEY_RECIPE}`)
                .then(function (response) {
                    localStorage.setItem('allRecipe', JSON.stringify(response.data.recipes));
                    setallRecipe(response.data.recipes);
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
                <div className='flex justify-center md:justify-end  items-center col-span-2 md:col-span-1 mt-10 lg:mt-0 ms-0 lg:ms-10'>
                    <div
                        className=' text-4xl leading-tight text-center md:text-start lg:text-6xl'>
                        <div className='font-serif mt-0  lg:mt-10 '>
                            <p>Taste the Delight</p>
                            <p>Pick Your Bite!</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-start ms-10'>
                    <img className='w-1/2 hidden md:block' src={food} alt="recipes" />
                </div>
            </div>
            <div className=''>
                {error ? (
                     <Error error={error}/>
                ) : (
                    <div className='flex flex-wrap justify-center  gap-5 mx-0 xl:mx-60 p-3 '>
                        {
                            allRecipe.map((item) => (
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

export default All_recipe
