import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import logo from '../assets/loco.png'
import Theme from './Theme'
import '../App.css'

function Navbar() {
      function removeAllLocal() {
        localStorage.removeItem('search');
        localStorage.removeItem('recipe_home');
        localStorage.removeItem('cuisines');
        localStorage.removeItem('detail_recipes');
        localStorage.removeItem('detail_nutri');
        localStorage.removeItem('cuisines');
        localStorage.removeItem('allRecipe');

    }
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar ">
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

            </label>
          </div>
          <div className="flex px-0 md:px-2 mx-0 md:mx-2 font-semibold text-3xl ">

            <Link to={'/'} className=' mx-0 md:mx-2 flex items-center'>
              <img src={logo} alt="" className='w-12 h-12' />
              <p className='ms-4 hidden md:block'>Recipes</p>
            </Link>

          </div>
          <div className='flex-1  hidden md:block mx-20'>
            <ul className="flex items-center">
              <li><Link to={'/allrecipe'} className='btn btn-ghost'>  Recipes</Link></li>
              <li >
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="btn-ghost btn m-1">Cuisines</label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52">
                    <li ><Link to={'cuisines/Thai'} className='flex  justify-between'>
                      <p >Thai</p>
                      <img src="https://flagicons.lipis.dev/flags/4x3/th.svg" className='rounded w-6 ' />
                    </Link></li>
                    <li ><Link to={'cuisines/American'} className='flex  justify-between'>
                      <p >American</p>
                      <img src="https://flagicons.lipis.dev/flags/4x3/us.svg" className='rounded w-6 ' />
                    </Link></li>
                    <li ><Link to={'cuisines/Japanese'} className='flex  justify-between'>
                      <p >Japanese</p>
                      <img src="https://flagicons.lipis.dev/flags/4x3/jp.svg" className='rounded w-6 ' />
                    </Link></li>
                    <li ><Link to={'cuisines/Mexican'} className='flex  justify-between'>
                      <p >Mexican</p>
                      <img src="https://flagicons.lipis.dev/flags/4x3/mx.svg" className='rounded w-6 ' />
                    </Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex-none hidden md:block">
            <Search />
          </div>

      
          <div className="flex-grow md:flex-none justify-end ">
            <Theme />
          </div>


        </div>
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          <Search />

          <li className='mt-4 mb-2'><Link to={'/allrecipe'}>Recipes</Link></li>
          <li>
            <details open>
              <summary>Cuisines</summary>
              <ul>
                <li >
                  <Link to={'cuisines/Thai'} className='flex  justify-between'>
                    <p >Thai</p>
                    <img src="https://flagicons.lipis.dev/flags/4x3/th.svg" className='rounded w-6 ' />
                  </Link>
                </li>
                <li >
                  <Link to={'cuisines/American'} className='flex  justify-between'>
                    <p >American</p>
                    <img src="https://flagicons.lipis.dev/flags/4x3/us.svg" className='rounded w-6 ' />
                  </Link>
                </li>
                <li>
                  <Link to={'cuisines/Japanese'} className='flex  justify-between'>
                    <p >Japanese</p>
                    <img src="https://flagicons.lipis.dev/flags/4x3/jp.svg" className='rounded w-6 ' />
                  </Link>
                </li>
                <li>
                  <Link to={'cuisines/Mexican'} className='flex  justify-between'>
                    <p >Mexican</p>
                    <img src="https://flagicons.lipis.dev/flags/4x3/mx.svg" className='rounded w-6 ' />
                  </Link>
                </li>

              </ul>
            </details>
          </li>

        </ul>

      </div>
    </div>

  )
}

export default Navbar