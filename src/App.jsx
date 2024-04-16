import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const Increment = () => {
    setCount(count + 1);
  }
  const Decrement = () => {
    setCount(count - 1)
    if (count === 0) {
      setCount(count);
    }
  }

  const save = () => {
    setCount(0)
    document.querySelector('span').innerHTML += "" + count + "-";
  }

  const Reset = () => {
    setCount(0)
    document.querySelector('span').innerHTML = "";
  }

  return (
    <>
    <main className='container'>
      <section className='app-container'>
        <h1>Counter App with React</h1>
        <h2 id='value'>{count}</h2>
        <button id='increment' onClick={Increment}>Increment</button>
        <button id='decrement' onClick={Decrement}>Decrement</button>
        <button id='save' onClick={save}>Save</button>
        <button id='reset' onClick={Reset}>Reset</button>
        <p>Previous entries: <span></span></p>
      </section>
    </main>
    </>
  )
}

export default App
