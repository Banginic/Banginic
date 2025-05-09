import React, { useState } from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom'

function AppProvider({ children }) {
   const navigate =  useNavigate()
    const baseUrl = import.meta.env.VITE_BASE_URL
    const [showNavbar, setShowNavbar] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    
    const token = localStorage.getItem('Admin-token') || null
    const [ messages, setMessages ] = useState([])
    const [ employees, setEmployees ] = useState([])
    const [ projects, setProjects ] = useState([])
    const [ jobs, setJobs ] = useState([])
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
        messages,
        isLoggedIn, setIsLoggedIn,
        setMessages,
        user, setUser,
        jobs, setJobs,
         setRun, removeAllDisplay,
         showNavbar, setShowNavbar,
         showSidebar, setShowSidebar,
         projects, setProjects,
         employees, setEmployees,
          run
    }
  return (
    <AppContext.Provider value = { values}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider
