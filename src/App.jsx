import { useState } from 'react'
import './styles/index.css'
import Login from './pages/login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Login /> {/* cambiar esta linea para probar otras paginas */}
    </>
  )
}

export default App