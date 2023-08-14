import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import '../App.css'

function Recipe_home() {
    const [recipe, setRecipe] = useState([])
    const [error, setError] = useState(null);


    useEffect(() => {
        getRecipe();
    }, [])

    function getRecipe() {
        const check = localStorage.getItem('recipe_home');

        if (check) {
           
                setRecipe(JSON.parse(check));
           

        } else {
            axios.get(`https://api.spoonacular.com/recipes/random?number=6&apiKey=${import.meta.env.VITE_API_KEY_RECIPE}`)
                .then(function (response) {
                    localStorage.setItem('recipe_home', JSON.stringify(response.data.recipes));
                    setRecipe(response.data.recipes);
                })
                .catch(function (error) {
                    console.log(error);
                    setError(error);
                })
        }
    }

    return (
        <div className=' mt-10 lg:mt-24'>
            <p className='text-2xl lg:text-5xl text-center font-medium font-serif'>Popular Recipes You can't Miss</p>
            <p className='text-center mt-6 mx-5'>From comfort food classics to exotic flavors , our featured
                recipes are sure to impress</p>
            <div className='flex flex-wrap justify-center  gap-4 mt-5 p-3'>
                {error ? (
                    <div className='flex  justify-center p-5 '>
                        <div className="alert alert-error w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='break-all'>{error.message}</span>
                        </div>
                    </div>
                ) : (
                    recipe.slice(0, 4).map((item) => (
                        <Link to={`/recipe/${item.id}`} className='flex hover:-translate-y-2 hover:duration-500 hover:shadow-md rounded-xl delay-75' key={item.id}>
                           
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
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default Recipe_home
