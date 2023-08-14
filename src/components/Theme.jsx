import React, { useState } from 'react';
import { FaMoon, FaSun, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Theme = () => {
    const [theme, setTheme] = useState('light');
    const  navigate = useNavigate();

    function removeAllLocal(){
        localStorage.removeItem('search');
        localStorage.removeItem('recipe_home');
        localStorage.removeItem('cuisines');
        localStorage.removeItem('detail_recipes');
        localStorage.removeItem('detail_nutri');
        localStorage.removeItem('cuisines');
        localStorage.removeItem('allRecipe');
        navigate('/')

    }




    function changeTheme(newTheme) {
        newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div >
            <button className="btn  btn-ghost"  onClick={removeAllLocal}>
                <FaTrash/>
            </button>
            <button className='btn  btn-ghost' onClick={changeTheme}>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </button>
        </div>


    );
};

export default Theme;
