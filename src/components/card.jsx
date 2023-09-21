import React from 'react'

function Card({title,image}) {
    return (
        <div className='flex hover:-translate-y-2 hover:duration-500 hover:shadow-md rounded-xl delay-75 '>
            <div class="flex items-center justify-center">
                <div class="relative h-[14rem]  xl:h-80 xl:w-[18rem] rounded-lg">
                    <img src={image} class="object-cover w-full h-full rounded-lg" />
                    <div class="absolute w-full h-full bottom-0 bg-gradient-to-b from-black/10 from-50% to-black/100 rounded-lg flex flex-col items-center justify-end text-start">
                        <p class="text-center text-lg my-4  px-14 text-gray-300 ">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card