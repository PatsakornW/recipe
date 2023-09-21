import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import '../App.css'
import Card from './card';
import Error from './error';

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
                    <Error error={error}/>
                ) : (
                    recipe.slice(0, 4).map((item) => (
                        <Link to={`/recipe/${item.id}`} key={item.id}>
                            <Card title={item.title} image={item.image}/>
                         
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default Recipe_home
