import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
   const images = [
      {
         url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
         id: 1,
         artist: 'John Doe',
         text: 'lorem ipsum'
      },
   ]
   return (
      <main>
         {images.map((image) => (
            <Link key={image.id} className='rounded-lg shadow-lg p-4'>
               <div >
                  <img src={image.url} alt={image.artist} />
                  <p>{image.artist}</p>
                  <p>{image.text}</p>
               </div>
            </Link>
         ))}
      </main>
   )
}
