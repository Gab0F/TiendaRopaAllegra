import { useState } from 'react'
import Cart from './pages/cart.jsx'

import './styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Cart /> {/* cambiar esta linea para probar otras paginas */}
    </>
  )
}

export default App