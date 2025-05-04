import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import { Loading } from '../components/exportComp'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios  from 'axios'

function Employee() {
  const { baseUrl, employees, token, setEmployees } = useContext(AppContext)
  const [ isLoading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
   
 async function fetchEmployees(){
  setLoading(true)
  setError('')
 
  try{
    const { data } = await axios.get(baseUrl + '/api/v2/employees/list', {
      headers : { Authorization: `Bearer ${token}`}
    })
    const { success, message, employees } = data
    if(!success){
     return setError(message)
    }
    setEmployees(employees)
    toast.success(message)
  }
  catch(ex){
    setError(ex.response.data.message)
  }
  finally{
    setLoading(false)
  }
 
 }


 useEffect(() => {
  fetchEmployees()
  return () =>{}
 },[])

 if(isLoading) return <Loading />
 if(employees.length < 1 ) return (
  <div className='h-screen grid place-items-center'>
      <div>
        <h2 className='heading3'>{error}</h2>
        <p className='heading4 text-gray-800'>Please Hire Boss!</p>
      </div>
  </div>
 )
  return (
    <div className='h-screen mt-12'>
      <h2 className="heading3 mano text-center">EMPLOYEES</h2>
      <table className="w-sm lg:w-xl border mx-auto mt-8 text-sm table-fixed">
        <thead>
          <tr className="flex justify-around bg-gray-100 py-1">
            <th className="text-start ">S/N</th>
            <th>FULL NAME</th>
            <th>POSITON</th>
            <th>HIRE DATE</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Link
              className="bg-gray-50 hover:bg-gray-100"
              key={index}
              to={employee._id}
            >
              <tr className="flex justify-between px-2 py-3 my-1 bg-gray-50 hover:bg-gray-300">
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.createdAt}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employee
