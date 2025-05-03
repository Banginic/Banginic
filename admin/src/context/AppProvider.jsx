import React, { useState } from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom'

function AppProvider({ children }) {
   const navigate =  useNavigate()
    const baseUrl = import.meta.env.VITE_BASE_URL
    const token = localStorage.getItem('Admin-token') || null
    const [ messages, setMessages ] = useState([])
    const [ run, setRun ] = useState(false)
    
    

    const values = {
        baseUrl,
        navigate,
        token,
        messages,
        setMessages,
         setRun,
          run
    }
  return (
    <AppContext.Provider value = { values}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider
