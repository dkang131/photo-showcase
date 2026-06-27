import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import People from "./pages/People";
import Travel from "./pages/Travel";
import Lifestyle from "./pages/Lifestyle";
import Friends from "./pages/Friends";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;