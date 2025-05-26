import React, { useState } from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom'

function AppProvider({ children }) {
   const navigate =  useNavigate()
    const baseUrl = import.meta.env.VITE_BASE_URL
    const [showNavbar, setShowNavbar] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    
    const token = localStorage.getItem('Admin-token') || null

    const [ user, setUser ] = useState( null)
    const [ isLoggedIn, setIsLoggedIn ] = useState(localStorage.getItem('isLoggedIn') || false)

   
    const [ run, setRun ] = useState(false)
    
    function removeAllDisplay(){
     setShowNavbar(false)
     setShowSidebar(false)
    }
    

    const values = {
        baseUrl,
        navigate,
        token,
        isLoggedIn, setIsLoggedIn,
        user, setUser,
         setRun, removeAllDisplay,
         showNavbar, setShowNavbar,
         showSidebar, setShowSidebar,
      
          run
    }
  return (
    <AppContext.Provider value = { values}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider
