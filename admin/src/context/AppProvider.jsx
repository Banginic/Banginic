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
    const [ projects, setProjects ] = useState([])
    const [ user, setUser ] = useState( null)
    const [ isLoggedIn, setIsLoggedIn ] = useState(localStorage.getItem('isLoggedIn') || false)

    const [ employees, setEmployees ] = useState([ {
      _id:1234,
      name:'Boris Ayam Ndoh',
      position:'Admin CEO',
      qualification:'I am a passion web developer with little experience hope for God to bless me. ',
      socialLinks: {facebook: 'http://facebook.com', instagram: 'http://instagram'},
      photo:'http://cloudinary/v3/image.png',
      createdAt:'23-04-2004'
    },
    {
      _id:12345,
      name:'Boris Ayam Ndoh',
      position:'Admin CEO',
      qualification:'I am a passion web developer with little experience hope for God to bless me. ',
      socialLinks: {facebook: 'http://facebook.com', instagram: 'http://instagram'},
      photo:'http://cloudinary/v3/image.png',
      createdAt:'23-04-2004'
    },])
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
