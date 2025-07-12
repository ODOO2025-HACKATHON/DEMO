import AppContext from "./AppContext";


import React, { useState } from 'react'

const AppState = (props) => {
  const url = 'http://localhost:3000/api';
   const register = async (name, email, password) => {

        const api = await axios.post(`${url}/user/register`, { name, email, password }, {
            headers: {
                "Content-Type": "Application/json"
            }, withCredentials: true
        });
      }
  
   const [a, setA] = useState("Lord Suhas ");
  return (
    <AppContext.Provider value={{register}}>{props.children}</AppContext.Provider>
      
  
  )
}

export default AppState
