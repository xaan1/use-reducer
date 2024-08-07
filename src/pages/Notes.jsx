
import React, { useContext, useState } from 'react'
import { globalContext } from '../Contex'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
  const {state , dispatch} = useContext(globalContext)
    console.log(state)
    const navigate = useNavigate()

     const [title, setTitle] = useState('')
     const [content, setContent] = useState('')

     const handleSubmit = (e) => {
        e.preventDefault()

        console.log(title, content)
       
       

         const newData = {
              id: new Date().getTime().toString(),
              title: title,
              content: content
         }

    
        dispatch({type: 'ADD_NOTE', payload: newData})
        navigate("/")
     }
    
  return (
    <div className='max-w-lg mx-auto flex items-center justify-center md:items-center md:justify-center mt-40'>
        <form

        onSubmit={handleSubmit}
        
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' for='username'>
                    Title
                </label>
                <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='Title' type='text' placeholder='Title' />
            </div>
            <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2' for='password'>
                    Content
                </label>
                <textarea

value={content}
onChange={(e) => setContent(e.target.value)}
                
                className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='content' type='content' placeholder='content' />
                <p className='text-red-500 text-xs italic'>Please choose a password.</p>
            </div>
            <div className='flex items-center justify-between'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                   Puplished
                </button>
            </div>
        </form>



    </div>
  )
}

export default Notes