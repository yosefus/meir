import React, { useState } from 'react';
import { artCollection } from '../data/data';


export default function Search({ setArts }) {

    const filteredArt = (e) => {
        const value = e.target.value;
       
        setArts(
            artCollection.filter((art) => 
                art.artistName.toLowerCase().includes(value.toLowerCase()) ||
                art.artInfo.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    return (
        <div>
            <input 
                type="text"
                className="w-full border-2 rounded-lg border-black"
                placeholder="Search by artist or artwork"
                onChange={filteredArt}
            />
        </div>
    );
}
