/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Login</h1>
                <form className='max-w-md mx-auto'>
                    <input type="email" placeholder='email@domain.com' />
                    <input type="password" placeholder='Password' />
                    <button className='primary mt-2'>Login</button>
                    <div className='text-center py-2 text-gray-500'>Don't have a account? <Link className='text-black underline' to={"/register"} >Register Now</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginPage