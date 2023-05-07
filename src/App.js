import Details from "./Components/Details";
import Personal from "./Components/Personal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/userData" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
