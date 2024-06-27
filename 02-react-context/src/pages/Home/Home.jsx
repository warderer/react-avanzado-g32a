import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'
import { SongProvider } from '@/context/SongContext'
import './home.css'

const Home = () => {
  return (
    <SongProvider>
      <div className='home-container'>
        <div className='izquierdo'>
          <h2>Song List</h2>
          <SongList />
        </div>

        <div className='derecho'>
          <SongDetails />
        </div>
      </div>
    </SongProvider>
  )
}
export default Home
