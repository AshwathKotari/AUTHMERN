import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
           <NavLink to='/'><h1 className='font-bold'>Auth App</h1></NavLink> 
            <ul className='flex space-x-4'>
                <NavLink to='/'><li>Home</li></NavLink>
               <NavLink to='/About'><li>About</li></NavLink> 
                <NavLink to='/SignIn'><li>Sign In</li></NavLink>
            </ul>
        </div>
    </div>
  ) 
}
