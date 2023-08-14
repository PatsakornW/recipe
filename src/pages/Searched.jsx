import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import search_img from "../assets/chef3.png";

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
          <div className='flex  justify-center p-5 '>
            <div className="alert alert-error w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className='break-all'>{error.message}</span>
            </div>
          </div>
        ) : (
          <div className='flex flex-wrap justify-center  gap-4 mx-0 xl:mx-60 p-5 '>
            {
              searchRecipe.map((item) => (
                <Link to={`/recipe/${item.id}`} key={item.id} className='flex hover:-translate-y-2 hover:duration-500 hover:shadow-md rounded-xl delay-75  hover:bg-secondary hover:text-white'>
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
            }
          </div>
        )}
      </div>


    </motion.div>
  )
}

export default Searched