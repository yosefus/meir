import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import ArtCard from './pages/ArtCard';



const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "art/:imageId",
    element: <ArtCard />,
  },
])
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
