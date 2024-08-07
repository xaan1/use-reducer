import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contex from './Contex.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/Signup.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Notes from './pages/Notes.jsx'
import Allnote from './pages/Allnote.jsx'
import Update from './pages/Update.jsx'


const router = createBrowserRouter([
  {
    // index: true,
    path: "/",
    element: <App />,
    children: [
      

      {
        index: true,
        element: <Allnote />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Notes",
        element: <Notes />,
      },
      {
        path: "update/:id",
        element: <Update />,
      },
     
    
    ]
      
  },
  

  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contex>
    <RouterProvider router={router} />
    </Contex>
    
  </React.StrictMode>,
)
