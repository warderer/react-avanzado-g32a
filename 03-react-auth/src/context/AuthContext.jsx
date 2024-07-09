import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// #1 Crear el contexto
const AuthContext = createContext()

// #2a Crear la función del proveedor (provider)
const AuthProvider = ({ children }) => {
  // Aquí va la lógica de autenticación
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // JWT payload decodificado

  const login = (token) => {
    localStorage.setItem('token', token)
    const payload = jwtDecode(token)
    setIsAuth(true)
    setUserPayload(payload)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
    setUserPayload(null)
  }

  // verificar si hay un token en el localStorage y si es válido cargarlo para evitar que el usuario tenga que loguearse cada vez que recargue/entre a la página
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const payload = jwtDecode(token)
      setIsAuth(true)
      setUserPayload(payload)
    }
  }, [])

  const data = {
    // Las cosas que quiero hacer global
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
