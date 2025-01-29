import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from './component/CButton'
import Card from './component/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("Texto")

  function countUp() {
    setCount((count) => count + 1)
  }

  function changeText() {
    const newText = prompt("Nuevo texto")
    if (newText === null) return
    setTexto(newText)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Card text={`${count}`}>
          {texto}
        </Card>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button text="count up" func={countUp} />
        <Button text="Cambiar texto" func={changeText} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
