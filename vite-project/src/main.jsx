import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Hero from './components/Hero/Hero.jsx';
import Home from './components/Home/Home.jsx';
import Build from './components/Build/Build.jsx';
import Item from './components/Item/Item.jsx';
import Content from './components/Content/Content.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/hero",
    element: <Hero />
  },
  {
    path: "/build",
    element: <Build />
  },
  {
    path: "/item",
    element: <Item />
  },
  {
    path: "/content",
    element: <Content />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
