import { useState } from 'react'
import './styles/index.css'
import Login from './pages/login.jsx'
// import Producto from './pages/producto.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login /> {/* cambiar esta linea para probar otras paginas */}
      {/* <Producto /> */}
    </>
  )
}

export default App