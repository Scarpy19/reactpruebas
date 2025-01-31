import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from './component/CButton'
import Card from './component/Card'
import './App.css'

interface MyObject {
  property1: string;
  property2: any;
  [key: string]: any;
}

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("Vite + React")
  const [objeto, setObjeto] = useState<MyObject | null>(null)

  function countUp() {
    setCount((count) => count + 1)
  }

  function changeText() {
    const newText = prompt("Nuevo texto")
    if (newText === null) return
    setTexto(newText)
  }

  async function changeObject() {
    const $input = document.querySelector("#inputObject") as HTMLInputElement;
    let newObject;

    if ($input != null) {
      if ($input.files == null || $input.files.length === 0) {
        alert("Selecciona un archivo")
        return
      }
      newObject = await $input.files[0].text()
    }
    if (newObject == null || newObject === "") {
      alert("Objecto vacío")
      return
    }
    const obj = JSON.parse(newObject)
    setObjeto(obj)
  }

  const renderList = (obj: MyObject) => {
    return (
      <ul>
        {Object.keys(obj).map((key, index) => (
          <li key={key} id={`li-${index}`}>
            {typeof obj[key] === "object" && obj[key] !== null ? (
              <>
                <strong>{key}:</strong>
                <br />
                {renderinComas(obj[key])}
              </>
            ) : (
              <>
                <strong>{key}:</strong> {String(obj[key])}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderinComas = (obj: MyObject) => {
    return (
      Object.keys(obj).map((key) => (
        <i key={key}>
          "<strong>{key}:</strong> {"'" + String(obj[key]) + "', "}"
        </i>
      ))
    );
  };

  // iterateJson(jsonData);

  return (
    <main>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Card text={`${count}`}>
          {
            objeto && renderList(objeto)
          }
        </Card>
      </div>
      <h1>{texto}</h1>
      <div className="card">
        <Button text="count up" func={countUp} />
        <Button text="Cambiar texto" func={changeText} />
        <Button text="Cambiar objeto" func={changeObject} />
        <input type="file" id='inputObject' />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
