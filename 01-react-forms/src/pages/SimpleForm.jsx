import logo from '../assets/react.svg'

const SimpleForm = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />

        <form onSubmit={() => {}/* HANDLE SUBMIT */}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={() => {}/* HANDLE INPUT */}
            value=''
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={() => {}/* HANDLE INPUT */}
            value=''
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
