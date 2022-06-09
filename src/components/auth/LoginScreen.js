import React from 'react'

import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'


export const LoginScreen = () => {
  return (
    <>
        <h3 className='auth__title'>Login</h3>

        <input
          type="text"
          placeholder='email'
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

        <button
          type='submit'
          className='btn btn-primary btn-block'
        >
          Login
        </button>
        <hr/>

        <div className='auth__social-networks'>
            <GoogleButton
              onClick={() => { console.log('Google button clicked') }}
            />
        </div>

        <Link 
            to="/auth/register"
            className='link'
        >
            Register
        </Link>

    </>
  )
}
