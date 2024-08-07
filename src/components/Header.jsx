
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { globalContext } from '../Contex'

const Header = () => {

  const {state , dispatch} = useContext(globalContext)
  return (
    <div className=' mx-3 flex items-center justify-between p-2'>
        <h1>Logo</h1>
        <ul className='space-x-2'>
          {
            state.auth.isAuth && (
              <>
 <Link to='/'>Home</Link>
 <Link to='/Contact'>Contact</Link>
 <Link to='/Notes'>Notes</Link>
  <button 

 className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
  onClick={() => dispatch({type: 'LOGOUT'})}
  
  >logout</button>
 
              </>

            )
          }
          {
            !state.auth.isAuth && (
              <>
              <Link 
               className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              
              to='/Signup'>Signup</Link>
              <Link
               className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
               to='/login'>Login</Link>
              </>
            )
              
          }
           
         
          
          
           

        </ul>
    </div>
  )
}

export default Header