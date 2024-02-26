import React from 'react'
import { useNavigate,NavLink } from 'react-router-dom';
import { useState } from 'react';

export const SignUp = () => {
 const [formData,setFormData]=useState({})
 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res = await fetch('/api/auth/signup',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(formData)
    });
    const data =await res.json();
    console.log(data);{message:'user created successfully'}
  }
    

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
         <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:text-opacity-95'>Sign up</button>
       

        </form>

        <div className='flex gap-2 mt-5'>
          <p>Have an account?</p>

          <NavLink to='/SignIn'><span className='text-blue-500'>Sign In</span></NavLink>
        </div>


    </div>
  )
}
