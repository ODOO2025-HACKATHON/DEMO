import AppContext from "./AppContext";


import React, { useState } from 'react'

const AppState = (props) => {
   const [a, setA] = useState("Hello World");
  return (
    <AppContext.Provider value={{a}}>{props.children}</AppContext.Provider>
      
  
  )
}

export default AppState
