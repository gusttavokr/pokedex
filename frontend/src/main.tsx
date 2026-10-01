import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/home/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gen1 from './pages/gen1/Gen1.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/gen1",
    element: <Gen1 />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
