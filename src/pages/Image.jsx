import { useParams } from 'react-router-dom'
import { images } from '../data/images'

export default function Image() {
  const { imageId } = useParams()
  const current =  images.find(image => image.id == imageId)
  return (
    <main className='container mx-auto'>
      Image - {imageId}
    </main>
  )
}
