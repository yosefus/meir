import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artCollection } from '../data/data';
import Search from '../components/Search';

export default function Home() {
   const [arts, setArts] = useState(artCollection);

   return (
      <main className="p-4 container mx-auto">
         <Search  setArts={setArts} />
         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {arts.map((art) => (
               <li key={art.artId}>
                  <Link className="rounded-lg shadow-lg p-4" to={`/art/${art.artId}`}>
                     <img src={art.imageSrc} alt={art.artistName} />
                     <h2 className="text-lg font-semibold text-gray-600">{art.artistName}</h2>
                     <p className="text-sm font-semibold text-gray-400">{art.artInfo}</p>
                     <p>{art.text}</p>
                  </Link>
               </li>
            ))}
         </ul>
      </main>
   );
}
