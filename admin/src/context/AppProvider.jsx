import React, { useState } from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom'

function AppProvider({ children }) {
   const navigate =  useNavigate()
    const baseUrl = import.meta.env.VITE_BASE_URL
    const token = localStorage.getItem('Admin-token') || null
    const [ messages, setMessages ] = useState([])
    const [ projects, setProjects ] = useState([])
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
    
    

    const values = {
        baseUrl,
        navigate,
        token,
        messages,
        setMessages,
         setRun,
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
