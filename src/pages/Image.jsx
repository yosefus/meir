import { useParams } from 'react-router-dom'
import { images } from '../data/images'

export default function Image() {
  const { imageId } = useParams()
  const current =  images.find(image => image.id == imageId)
  return (
    <main className='container mx-auto grid grid-cols-1 md:grid-cols-4'>
      <div className='md:col-span-3 p-4' >

      </div>
      <div className='bg-red-50 p-4'>

      </div>
    
    </main>
  )
}
