import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./page/Search";
import Result from "./page/Result";
import Company from "./page/CoInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/result" element={<Result />} />
        <Route path="/information" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
