import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import Header from '@/components/Header'
import RoutesIndex from '@/routes/Index'
import './App.css'

function App () {
  /* 2b. Implementar el contexto en mi App */
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
