import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import cal from "../assets/calories.png";
import protein from "../assets/soybean.png";
import fat from "../assets/trans-fats-free.png";
import carbs from "../assets/carb.png";
import '../App.css'
import { motion } from 'framer-motion';






function Recipe() {
    const [detail, setdetail] = useState([])
    const [nutrition, setNutrition] = useState([])
    const [activeTab, setactiveTab] = useState("summary")
    const { id } = useParams();
    const [error, setError] = useState(null);

    // console.log(id);

    useEffect(() => {
        // console.log(detail);
        getDetail();

    }, [id])




    function getDetail() {
        const check = localStorage.getItem('detail_recipes');
        const checkNutri = localStorage.getItem('detail_nutri');



        if (check && checkNutri) {
            setdetail(JSON.parse(check))
            setNutrition(JSON.parse(checkNutri))




        } else {
            axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY_RECIPE}`)
                .then(function (response) {
                    localStorage.setItem('detail_recipes', JSON.stringify(response.data));
                    setdetail(response.data);
                    // console.log('Response data:', response.data);
                })
                .catch(function (error) {
                    setError(error);
                    console.log(error);
                })

            axios.get(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${import.meta.env.VITE_API_KEY_RECIPE}`)
                .then(function (response) {
                    localStorage.setItem('detail_nutri', JSON.stringify(response.data));
                    setNutrition(response.data);
                })
                .catch(function (error) {
                    setError(error);
                    console.log(error);
                })

        }

    }

    return (
        <div >
            {error ? (<div className='flex  justify-center p-5 '>
                <div className="alert alert-error w-80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className='break-all'>{error.message}</span>
                </div>
            </div>) : (
                <motion.div className="lg:w-full xl:w-4/5  m-auto cursor-default grid grid-rows-1 grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-14"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    {/* grid 1 */}
                    <div>
                        <p className=' font-serif text-6xl font-black p-5 md:px-10 text-center lg:text-start   text-secondary'>{detail.title}</p>
                        <div className='md:px-10 flex flex-wrap justify-center xl:justify-start  text-center lg:text-start'>
                            {detail?.dishTypes?.map((type) => (
                                <div key={type} className=" badge-sm md:badge-lg badge badge-secondary badge-outline m-1">{type}</div>
                            ))}
                        </div>
                        <div className='flex flex-col items-center xl:items-start px-5 sm:px-10 p-5'>
                            <div className="tabs ">
                                <a className={activeTab === 'summary' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'} onClick={() => setactiveTab("summary")}>Summary</a>
                                <a className={activeTab === 'ingredients' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'} onClick={() => setactiveTab("ingredients")}>Ingredients</a>
                                <a className={activeTab === 'how to' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'} onClick={() => setactiveTab("how to")}>How to</a>
                            </div>
                            <div className='mt-4'>
                                {activeTab === 'summary' && (
                                    <div>
                                        <p className="text-sm text-justify" dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
                                    </div>
                                )}
                                {activeTab === 'ingredients' && (
                                    <div>
                                        {detail?.extendedIngredients?.slice(0, 10).map((item) => (

                                            <div key={item.id} className="lg:ms-14 flex  	  lg:justify-start ">
                                                <div className="w-28">{item.name}</div>
                                                <div className='' >{Number.isInteger(item.amount) ? item.amount : item.amount.toFixed(1)}  {item.unit}
                                                </div>
                                            </div>

                                        ))}
                                    </div>

                                )}
                                {activeTab === 'how to' && (
                                    <div>
                                        {detail?.analyzedInstructions?.map((item) =>
                                        (
                                                <div class="relative ">
                                                    <div class="absolute h-full border  border-opacity-20 border-secondary"></div>
                                                    {item.steps.map((step) => (
                                                        <div class="flex items-center w-full my-3 -ml-1.5">
                                                            <div class="w-1/12 z-10">
                                                                <div class="w-3.5 h-3.5 bg-secondary rounded-full"></div>
                                                            </div>
                                                            <div class="w-11/12">
                                                                <p class="text-sm">{step.step}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* grid 2 */}
                    <div className='flex-col   flex  items-center   overflow-hidden m-5'>
                        <img className='order-2 xl:order-1 w-full my-4  rounded-2xl shadow-lg' src={detail.image} alt={detail.title} />
                        <div className="order-1 lg:order-2 grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 m-3">

                            <div className=" grid grid-rows-2 grid-flow-col gap-x-2 border-2  rounded-xl items-center p-2 bg-base">

                                <div className="row-span-3 "><img src={cal} className='h-14 w-14' alt="calories" /></div>
                                <div className="row-span-2 col-span-2 ">
                                    <p>Calories</p>
                                    <p className='font-bold text-xl'>{nutrition.calories}</p></div>
                            </div>
                            <div className="grid grid-rows-2 grid-flow-col gap-x-2 border-2 rounded-xl items-center p-2 bg-base">
                                <div className="row-span-3 "><img src={protein} className='h-14 w-14' alt="protein" /></div>
                                <div className="row-span-2 col-span-2 ">
                                    <p>Protein</p>
                                    <p className='font-bold text-xl'>{nutrition.protein}</p></div>
                            </div>
                            <div className="grid grid-rows-2 grid-flow-col gap-x-2 border-2 rounded-xl items-center p-2 bg-base">
                                <div className="row-span-3 "><img src={carbs} className='h-14 w-14' alt="carbs" /></div>
                                <div className="row-span-2 col-span-2 ">
                                    <p>Carbs</p>
                                    <p className='font-bold text-xl'>{nutrition.carbs}</p></div>
                            </div>
                            <div className="grid grid-rows-2 grid-flow-col gap-x-2 border-2 rounded-xl items-center p-2 bg-base">
                                <div className="row-span-3 "><img src={fat} className='h-14 w-14' alt="fat" /></div>
                                <div className="row-span-2 col-span-2 ">
                                    <p>Fat</p>
                                    <p className='font-bold text-xl'>{nutrition.fat}</p></div>
                            </div>


                        </div>
                    </div>

                </motion.div>
            )}
        </div>



    )
}

export default Recipe
