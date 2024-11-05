import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../data/images'
export default function Home() {
  
   return (
      <main className='p-4 container mx-auto'>
         <div>
            <input type="text" className='w-full border-2 rounded-lg border-black' />
         </div>
         <>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               {images.map((image) => (
                  <li key={image.id}>
                     <Link className='rounded-lg shadow-lg p-4' to={`/img/${image.id}`}>
                        <img src={image.url} alt={image.artist} />
                        <h2 className='text-lg font-semibold text-gray-600'>{image.artist}</h2>
                        <p>{image.text}</p>
                     </Link>
                  </li>
               ))}
            </ul>
         </>
      </main>
   )
}
