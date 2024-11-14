import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./components/Navbar"
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Dgfcware from './pages/DGFCWARE.jsx'
import Training from './pages/Training.jsx'
import Event from './pages/Event.jsx'


const router = createBrowserRouter([
  {
    path:"",
    element:
     <div>
      <Navbar/>
      <Home/>
     </div>
  },
  {
    path:"/about",
    element:
    <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:"/service",
    element:
    <div>
      <Navbar/>
      <Services/>
    </div>
  },
  {
    path:"/contact",
    element:
    <div>
      <Navbar/>
      <Contact/>
    </div>
  },
  {
    path:"/dgfcwarehouse",
    element:
    <div>
      <Navbar/>
      <Dgfcware/>
    </div>
  },
  {
    path:"/training",
    element:
    <div>
      <Navbar/>
      <Training/>
    </div>
  },
  {
    path:"/event",
    element:
    <div>
      <Navbar/>
      <Event/>
    </div>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
