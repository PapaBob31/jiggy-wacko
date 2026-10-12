import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
// import './index.css'
import App from './App.tsx'
import JerseysPage from "./Jerseys.tsx"
import CapPage from "./Caps.tsx"
import Root from "./Root.tsx"
import ShirtsPage from "./Shirts.tsx"
import JoggersPage from "./Joggers.tsx"
import PageNotFound from "./404.tsx"
import JeansPage from "./Jeans.tsx"




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, 
    children: [
      {index: true, Component: App},
      {path: "/jerseys", Component: JerseysPage},
      {path: "/caps", Component: CapPage},
      {path: "/shirts", Component: ShirtsPage},
      {path: "/joggers", Component: JoggersPage},
      {path: "/jeans", Component: JeansPage},
      {path: "*", Component: PageNotFound}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)