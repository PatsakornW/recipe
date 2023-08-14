import React from 'react';
import { motion } from 'framer-motion';
import food from "../assets/chef1.png";
import food2 from "../assets/chef4.png";

import { Link } from 'react-router-dom';
import Recipe_home from '../components/Recipes_home';


function Home() {
  return (
    
    <motion.div
      className='grid grid-cols-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='flex justify-center items-center col-span-2 md:col-span-1 mt-10 lg:mt-0 ms-0 lg:ms-10'>
        <div
          className=' text-4xl leading-tight text-center md:text-start lg:text-7xl'>

          <div className='font-serif mt-0 md:mt-20 lg:mt-20 '>
            <p>Let's Start</p>
            <p>Cooking With</p>
            <p>Popular Recipes</p>
          </div>

          <div
            className='flex flex-col items-center md:items-start text-base mt-4'>

            <p>Want to learn cook but confused how to start?</p>
            <p>No need to worry again!</p>
            <Link to={'/allrecipe'}>
              <button className='btn mt-4 btn-secondary text-white'>
                Explore all Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex justify-start'>
        <img className='w-5/6 hidden md:block' src={food} alt="recipes" />
      </div>


      <div className=' col-span-2'>
        <div className=' mt-10 md:mt-14 lg:mt-24'>
          <div className='flex justify-center items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="stat p-10 ">
                <div className="stat-figure text-secondary ">
                  <img src="https://spoonacular.com/application/frontend/images/food-api/landing/vegetarian-food.svg" alt="" className=' w-full h-full text-red-500' />
                </div>
                <div className="stat-title ">Ingredients</div>
                <div className="stat-value font-bold">2,600+
                </div>
              </div>

              <div className="stat p-10">
                <div className="stat-figure text-secondary">
                  <img src="https://spoonacular.com/application/frontend/images/food-api/landing/kitchen.svg" alt="recipes" />
                </div>
                <div className="stat-title">Recipes</div>
                <div className="stat-value font-bold">5,000+</div>
              </div>

              <div className="stat p-10">
                <div className="stat-figure text-secondary">
                  <img src="https://spoonacular.com/application/frontend/images/food-api/landing/shopping-basket.svg" alt="products" />
                </div>
                <div className="stat-title">Products</div>
                <div className="stat-value font-bold">600K+</div>
              </div>

              <div className="stat p-10">
                <div className="stat-figure text-secondary">
                  <img src="https://spoonacular.com/application/frontend/images/food-api/landing/hamburger.svg" alt="menu" />

                </div>
                <div className="stat-title">Menu Items</div>
                <div className="stat-value font-bold">115K+</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='col-span-2'>
        <Recipe_home />
      </div>

      <div className=' flex justify-center lg:justify-end items-center lg:items-start xl:items-center  col-span-2 md:col-span-1 mt-10 lg:my-20 xl:my-20 ms-0 md:ms-20 lg:ms-40'>
        <div
          className=' text-4xl leading-tight text-center md:text-end lg:text-5xl'>

          <div className='font-serif mt-0 '>
            <p>Cooking and share joy</p>
            <p>no matter</p>
            <p>your skill level!</p>
          </div>

        </div>
      </div>

      <div className='flex justify-center md:justify-start lg:justify-start ms-0 md:ms-10 lg:ms-10 my-10 lg:my-20 xl:my-20  col-span-2 md:col-span-1'>
        <img className='w-1/2 lg:w-2/5' src={food2} alt="recipes" />
      </div>



      <div className='col-span-2'>
        <footer className="footer footer-center p-4 bg-secondary text-white">
          <div>
            <p className=' tracking-wide text-md'>Copyright © 2023 - All right reserved by Recipes</p>
          </div>
        </footer>
      </div>







    </motion.div>
  );
}

export default Home;
