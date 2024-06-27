import { useSongContext } from '@/hooks/useSongContext'

const SongDetails = () => {
  const { selectedSong } = useSongContext()

  return (
    <div>
      {
        selectedSong.title
          ? (
            <div>
              <img src={selectedSong.img_url} alt={selectedSong.title} />
              <h2>{selectedSong.title}</h2>
              <p>{selectedSong.artist}</p>
              <p>{selectedSong.year}</p>
            </div>
            )
          : <h2>Selecciona una canción</h2>
      }
    </div>
  )
}
export default SongDetails
