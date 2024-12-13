import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contato from "./Pages/Contato";
import Empresa from "./Pages/Empresa";
import Home from "./Pages/Home";
import Cabecalho from "./layout/Cabecalho";

function App() {


  return (
    <Router>

      <Cabecalho />

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Routes>
        <Route path="/empresa" element={<Empresa />} />
      </Routes>


      {/* <Footer /> */}
    </Router>
  );
}

export default App;
