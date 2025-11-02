import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Colaboradores from "./pages/Colaboradores";
import ControlePonto from "./pages/ControlePonto";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/controle-ponto" element={<ControlePonto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
