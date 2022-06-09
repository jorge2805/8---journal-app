import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
        <h3 className='auth__title'>Register</h3>

        <input
          type="text"
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
        ></input>

        <input
          type="text"
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
        ></input>

        <input
          type="password"
          placeholder='Password'
          name='password'
          className='auth__input'
        ></input>

        <input
          type="password"
          placeholder='Confirm Password'
          name='password2'
          className='auth__input'
        ></input>

        <button
          type='submit'
          className='btn btn-primary btn-block mb-5'
        >
          Register
        </button>

        <Link 
            to="/auth/Login"
            className='link'
        >
            Login
        </Link>

    </>
  )
}
