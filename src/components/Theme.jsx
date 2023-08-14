import React, { useState } from 'react';
import { FaPalette } from 'react-icons/fa';


const Theme = () => {
    const [theme, setTheme] = useState('acid');
    const themes = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter"
    ];



    function changeTheme (newTheme)  {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    function removeAllLocal(){
        localStorage.removeItem('search');
        localStorage.removeItem('recipe_home');
        localStorage.removeItem('cuisines');
        localStorage.removeItem('detail_recipes');
        localStorage.removeItem('detail_nutri');
        localStorage.removeItem('cuisines');
        localStorage.removeItem('allRecipe');

    }


    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1 btn-ghost"> <FaPalette /> </label>
            <div className='dropdown-content border  rounded-box top-px h-[70vh] max-h-96 w-36 overflow-y-auto shadow-xl mt-16 '>
                <div className='z-auto grid grid-cols-1 gap-3 bg-base-100 ' tabIndex={0}>
                    <button className="hover:bg-base-200 p-3 overflow-hidden rounded-lg text-left " onClick={removeAllLocal}>
                        <div className="text-center flex-grow text-sm"  >Remove All LocalStorage</div>
                    </button>
                    {themes.map((theme, index) => (
                        <button className="hover:bg-base-200 p-3 overflow-hidden rounded-lg text-left " onClick={() => changeTheme(theme)} key={index}>
                            <div className="text-center flex-grow text-sm" >{theme}</div>
                        </button>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default Theme;
