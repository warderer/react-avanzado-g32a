import { createContext } from 'react'

// #1 Crear el contexto
const AuthContext = createContext()

// #2a Crear la función del proveedor (provider)
const AuthProvider = ({ children }) => {
  // Aquí va la lógica de autenticación

  const data = {
    // Las cosas que quiero hacer global
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
