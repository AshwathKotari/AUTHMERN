import React from 'react'
import { useNavigate,NavLink } from 'react-router-dom';

export const SignUp = () => {

 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form  className='flex flex-col gap-4'>
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
