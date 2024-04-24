'use client'
import React, { createContext, useReducer, useState } from 'react';



export const GlobalContext = createContext();


function GlobaProvider({ children }) {
    const [model,setModel] = useState(false)
    const modelHandler = ()=>{
        setModel((prevState) => !prevState)
    }
    return(
        <GlobalContext.Provider value={{modelHandler,model}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobaProvider
