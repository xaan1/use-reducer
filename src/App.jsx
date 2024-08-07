
import React, { useContext } from 'react'
import { globalContext } from './Contex'
import Signup from './pages/Signup'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const App = () => {


  return (
    <div className='p-2 mx-auto'>
       <Header />
     {/* {
      state.notes.map((note) => (
        <div key={note.id}>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          </div>
      ))
     } */}
    
      <Outlet />
    </div>
  )
}

export default App