import { useState, useEffect } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8000/mymodels/')
        .then(response => response.json())
        .then(data => setCount(data));
}, []);

  return (
    <>
      <Box>This is the Box</Box>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
