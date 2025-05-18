import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hi from './hi.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>hello</h1>
      <Hi />

      <Hi />

      <Hi />

    </div>
  )
}

export default App
