import axios from 'axios'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import food from "../assets/chef2.png";

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
                    <div className='flex  justify-center p-5 '>
                        <div className="alert alert-error w-80">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='break-all'>{error.message}</span>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-wrap justify-center  gap-5 mx-0 xl:mx-60 p-3 '>
                        {
                            allRecipe.map((item) => (
                                <Link to={`/recipe/${item.id}`} key={item.id} className='flex hover:-translate-y-2 hover:duration-500 hover:shadow-md rounded-xl delay-75 '>
                                    <div class="flex items-center justify-center">
                                        <div class="relative h-[14rem]  xl:h-80 xl:w-[18rem] rounded-lg">
                                            <img src={item.image} class="object-cover w-full h-full rounded-lg" />
                                            <div class="absolute w-full h-full bottom-0 bg-gradient-to-b from-black/10 from-50% to-black/100 rounded-lg flex flex-col items-center justify-end text-start">
                                                <p class="text-center text-lg my-4  px-14 text-gray-300 ">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div
                                        className="rounded-xl w-full md:w-56  px-3 pt-3 pb-3  border border-base-300 flex flex-row md:flex-col"

                                    >
                                        <img class="w-1/3 md:w-full rounded-xl" src={item.image} />
                                        <div className="w-full h-full  flex flex-col ml-2 md:ml-0 items-center justify-center ">
                                            <div class="mt-0 lg:mt-3 font-bold break-all text-sm md:text-base">{item.title}</div>
                                        </div>
                                    </div> */}
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
