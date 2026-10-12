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

/**
 * 
 * 




rUgJX	8JTLC	wHwPm	Ln2Nn	VtL6t
ETlNh	UHhSo	qsh11	8Izga	iMfXw
IY7Ck	LsSYA	t6nQM	GQEyI	6qrbj
		orvv4	MgJ9p

 */


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
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)