import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Explanation from './pages/Explanation';
import Main from './pages/Main';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/explanation" element={<Explanation />} />
        {/* 他のルートがあればここに追加 */}
      </Routes>
    </Router>
    </ChakraProvider>
  </StrictMode>,
)
