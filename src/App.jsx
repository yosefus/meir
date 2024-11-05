import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import Image from './pages/Image';



const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "img/:imageId",
    element: <Image />,
  },
])
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
