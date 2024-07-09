import { useState, useEffect } from 'react'
import { getMeUserService } from '@/services/userServices'

const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserService(token)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchUserData()
  }, [token])

  return (
    <>
      <h1>Dashboard</h1>
      {userData?.first_name && <h4>Nombre: {userData.first_name} </h4>}
      {userData?.last_name && <h4>Apellido: {userData.last_name} </h4>}
      {userData?.gender && <p>Genero: {userData.gender} </p>}
      {userData?.email && <p>Email: {userData.email} </p>}
      {userData?.role && <p>Role: {userData.role} </p>}
    </>
  )
}
export default Dashboard
