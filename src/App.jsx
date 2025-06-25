import { useState } from 'react'
import './styles/index.css'
import User from './pages/user.jsx'
import Producto from './pages/producto.jsx'
import Login from './pages/login.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('login')

  let content = null
  if (currentPage === 'login') content = <Login setCurrentPage={setCurrentPage} />
  else if (currentPage === 'productos') content = <Producto />
  else if (currentPage === 'user') content = <User />

  return (
    <>
      {content}
    </>
  )
}

export default App