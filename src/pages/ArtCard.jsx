import { useParams } from 'react-router-dom'
import Chat from '../components/Chat'
import { artCollection } from '../data/data'

export default function ArtCard() {
  const { imageId } = useParams()
  const current = artCollection.find(image => image.artId == imageId)

  return (
    <main className='container mx-auto grid grid-cols-1 md:grid-cols-4'>
      <div className='md:col-span-3 p-4' >
        <div className="flex items-end space-x-2 self-end">
          <h1 className="text-xl font-semibold text-gray-800">{current.artName}</h1>
          <p className="text-sm font-semibold text-gray-500">by {current.artistName}</p>
        </div>
        <img src={current.imageSrc} alt={current.artistName} />
      </div>
      <Chat />
    </main>
  )
}
