import React from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom'

function AppProvider({ children }) {
   const navigate =  useNavigate()
    const baseUrl = import.meta.env.VITE_BASE_URL

    const values = {
        baseUrl,
        navigate
    }
  return (
    <AppContext.Provider value = { values}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider
