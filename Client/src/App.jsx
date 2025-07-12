import React from 'react'
import { useContext } from 'react'
import AppContext from './Context/AppContext.jsx'

const App = () => {
  const { a } = useContext(AppContext);
  return (
    <div>
      {a}
    </div>
  )
}

export default App
