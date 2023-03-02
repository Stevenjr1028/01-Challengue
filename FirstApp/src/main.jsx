import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
//import FirstApp from './FirstApp'
//import { GifExpertApp } from './ComponentApp'
import { GifGrid } from './components/GifGrid'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GifGrid/>

  </React.StrictMode>,
)
