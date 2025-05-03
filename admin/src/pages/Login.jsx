import React, { useContext, useState } from 'react'
import { metaData } from '../assets/assest'
import axios from 'axios'
import AppContext from '../context/AppContext'
import { toast } from 'react-toastify'

function Login() {
    const { baseUrl, navigate } = useContext(AppContext)
    const [ fetchState, setFetchStat ] = useState({ isLoading: false, error: ''})
 const [ admin, setAdmin ] = useState({ email:'', password:''})
 const disabledBTN = admin.email.length < 6 || admin.password.length < 8 || fetchState.isLoading

 async function handleSubmit(event){
    event.preventDefault()
    setFetchStat({isLoading: true, error: ''})
    try{
        const { data } = await axios.post(baseUrl + '/api/auth/sign-in', admin)
        const { success, message, token }  = data
        if(success){
            toast.success(message)
            localStorage.setItem('Admin-token', token)
            setAdmin({ email:'', password:''})
            setFetchStat({ isLoading: false, error:''})
          return  setTimeout(() => navigate('/'), 1000)
        }
        setFetchStat({ isLoading: false, error: message})
        // setAdmin({ email:'', password:''})

    }
    catch(ex){
        console.log(ex);
        setFetchStat({isLoading:false, error:ex.response.data.message})
    }
 }
  return (
    <div className='h-screen grid text-sm place-items-center'>
      <form
      onSubmit={handleSubmit}
      className=' p-5 border rounded w-sm' >
        <h2 className='font-medium text-lg'>{metaData.name}</h2>
        <p className='text-gray-600'>Welcome back! Please Login using the form below</p>
        <div className='mt-8 '>
            <label htmlFor="email" className=''>Email address</label>
            <div className='mb-3 border mt-0.5 px-4 rounded py-1 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            <input type="email"
            placeholder='example@email.com'
            maxLength={25}
            id='email'
            value={admin.email}
            onChange={e => setAdmin({...admin, email: e.target.value})}
            required
            autoComplete='email'
            className='bg-transparent border-none outline-none px-2 w-full'
             />
            </div>
        </div>
        <div className=''>
            <label htmlFor="password" className=''>Password</label>
            <div className='mb-4 border mt-0.5 px-4 rounded py-1 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
            <input type="password"
            placeholder='Password'
            maxLength={12}
            minLength={8}
            id='password'
            value={admin.password}
            onChange={e => setAdmin({...admin, password: e.target.value})}
            required
            autoComplete='password'
            className='bg-transparent border-none outline-none px-2 w-full'
             />
            </div>
        </div>
        <button
        type='submit'
        disabled={disabledBTN}
        className='bg-black disabled:bg-gray-300 disabled:cursor-not-allowed text-white w-full py-1.5 cursor-pointer disable:cursor-wait hover:opacity-90 trans rounded mt-4'
        >Login</button>
        <p className='text-red-500 text-center mt-1'>{fetchState.error}</p>
      </form>
    </div>
  )
}

export default Login
