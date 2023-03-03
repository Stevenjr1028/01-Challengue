import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
//import FirstApp from './FirstApp'
//import { GifExpertApp } from './ComponentApp'
//import { GifGrid } from './components/GifGrid'
import { Counter } from './components/Counter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Counter/>

  </React.StrictMode>,
)
