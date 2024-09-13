import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import CompanyDetail from "./page/CompanyDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:corporation_id" element={<CompanyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
