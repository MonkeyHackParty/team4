import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Company from "./page/Company";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
