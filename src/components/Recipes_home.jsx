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
            <p className='text-2xl lg:text-5xl text-center font-medium'>Popular Recipes You can't Miss</p>
            <p className='text-center mt-6'>From comfort food classics to exotic flavors , our featured
                recipes are sure to impress</p>
            <div className='flex flex-wrap justify-center  gap-5 mt-5 p-3'>
                {error ? (
                    <div className='flex  justify-center p-5 '>
                        <div className="alert alert-error w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='break-all'>{error.message}</span>
                        </div>
                    </div>
                ) : (
                    recipe.slice(0, 4).map((item) => (
                        <Link to={`/recipe/${item.id}`} className='flex hover:-translate-y-1 hover:duration-300 hover:shadow-md rounded-xl delay-75' key={item.id}>
                           
                            <div class="rounded-xl w-full md:w-56  px-3 pt-3 pb-3  border border-base-300 flex flex-row md:flex-col" >
                                <img class="w-1/3 md:w-full rounded-xl " src={item.image} />
                                <div className="w-full h-full  flex flex-col ml-2 md:ml-0">
                                    <div class="mt-3   font-bold text-sm md:text-base">{item.title}</div>
                                    <div className='my-3 text-xs md:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, sed?</div>
                                    <button class=" btn btn-xs md:btn-sm mt-auto w-36 sm:w-full text-xs md:text-sm  btn-secondary rounded-lg text-white">See Full Details</button>              
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
