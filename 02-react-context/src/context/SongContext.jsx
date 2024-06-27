import { createContext, useEffect, useState } from 'react'
// usamos @ para no tener que poner ../../
// import canciones from '../../assets/listaCanciones.json'
import canciones from '@/assets/listaCanciones.json'

// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre diferentes NIVELES de componentes de forma directa.

// Para usar CONTEXT requerimos seguir una serie de pasos:

// Paso 1. Crear el contexto
const SongContext = createContext()

// Paso 2. Crear el provider
// El proveider, maneja de donde se obtiene la información y como se comparte.
// En este caso, el proveedor es un COMPONENTE que envuelve a los componentes que necesitan la información (el contexto). Se comparte mediante un prop llamado value.

function SongProvider ({ children }) {
  const [list, setList] = useState([]) // lista de canciones
  const [loading, setLoading] = useState(true) // ¿esta cargando?
  const [selectedSong, setSelectedSong] = useState({}) // canción seleccionada

  // Simulamos una petición a una API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  // Esto es lo que se va a compartir de manera global
  const data = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }

  return (
    <SongContext.Provider value={data}>
      {children}
    </SongContext.Provider>
  )
}

export {
  SongProvider,
  SongContext
}
