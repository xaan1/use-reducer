
import React, { useContext, useState } from 'react'
import { globalContext } from '../Contex'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

     const navigate = useNavigate()

    const {state , dispatch} = useContext(globalContext)
    console.log(state)

     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')

     const handleSubmit = (e) => {
        e.preventDefault()
       
        const newData = {
            id: new Date().getTime().toString(),
            username: username,
            password: password
        }


        dispatch({type: 'SIGNUP', payload: newData})
        navigate("/login")
     }
    
  return (
    <div className='max-w-lg mx-auto flex items-center justify-center md:items-center md:justify-center mt-40'>
        <form

        onSubmit={handleSubmit}
        
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' for='username'>
                    Username
                </label>
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
            </div>
            <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2' for='password'>
                    Password
                </label>
                <input

value={password}
onChange={(e) => setPassword(e.target.value)}
                
                className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' />
                <p className='text-red-500 text-xs italic'>Please choose a password.</p>
            </div>
            <div className='flex items-center justify-between'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                    Sign Up
                </button>
            </div>
        </form>



    </div>
  )
}

export default Signup