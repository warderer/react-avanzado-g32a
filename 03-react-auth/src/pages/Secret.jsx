import { useAuthContext } from '@/hooks/useAuth'

const Secret = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === 'ADMIN'
        ? <h2>Hola ADMIN</h2>
        : <h2>Hola CUSTOMER</h2>}

      {userPayload?.role === 'ADMIN' && <h4>Bienvenido Admin</h4>}

      {userPayload?.role === 'CUSTOMER' && <h4>Bienvenido Customer</h4>}
    </>
  )
}
export default Secret
