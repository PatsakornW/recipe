import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import search_img from "../assets/chef3.png";
import Card from '../components/card';
import Error from '../components/error';

function Searched() {
  const { searched } = useParams();
  const [searchRecipe, setsearchRecipe] = useState([])
  const [error, setError] = useState(null);


  useEffect(() => {
    getSearchRecipe();
  }, [searched])

  function getSearchRecipe() {
    const checkSearch = localStorage.getItem('search');

    if (checkSearch) {
      setsearchRecipe(JSON.parse(checkSearch));
    } else {
      axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searched}&number=9&apiKey=${import.meta.env.VITE_API_KEY_RECIPE}`)
        .then(function (response) {
          localStorage.setItem('search', JSON.stringify(response.data.results));
          setsearchRecipe(response.data.results);
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
        <div className='flex  justify-center md:justify-end  items-center col-span-2 md:col-span-1 mt-10 lg:mt-0 ms-0 lg:ms-10'>
          <div
            className=' text-4xl leading-tight text-center md:text-start lg:text-6xl'>
            <div className='font-serif '>
              <p>Flavors Galore</p>
              <p>Your Recipes,</p>
              <p>Your Way !</p>

            </div>
          </div>
        </div>

        <div className='flex justify-start ms-10'>
          <img className='w-1/2 hidden md:block' src={search_img} alt="Search" />
        </div>
      </div>


      <div >
        {error ? (
          <Error error={error}/>
        ) : (
          <div className='flex flex-wrap justify-center  gap-4 mx-0 xl:mx-60 p-5 '>
            {
              searchRecipe.map((item) => (
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

export default Searched