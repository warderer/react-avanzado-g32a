import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso #1: Crear los estados donde guardare la información tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso #3: Crear la función que se ejecutará al enviar el formulario.
  const handleSubmit = (event) => {
    event.preventDefault() // Evitamos que recargue la página y rompa el SPA
    // Aquí va la lógica de la aplicación.
    console.log({ email, password })
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit}>
          {/* Paso #2: Guardar cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>

        </form>
      </div>
    </div>
  )
}

export default SimpleForm
