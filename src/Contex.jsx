
import React, { createContext, useReducer } from 'react'
import { InitialState, Reducer } from './Reducer'


export const globalContext = createContext()
const Contex = ({children}) => {



    const [state , dispatch]   =    useReducer(Reducer  ,InitialState)



  return (
    <div>
        <globalContext.Provider value={{state , dispatch}}>
           {children}
        </globalContext.Provider>
    </div>
  )
}

export default Contex