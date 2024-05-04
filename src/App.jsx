import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Places from './pages/Places'
import MainRoutes from './routes/MainRoutes'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
     {/* <Login/>
     <Places/> */}
{/* <Home/> */}
    <MainRoutes/>
    </>
  )
}

export default App
