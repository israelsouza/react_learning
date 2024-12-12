import "./App.css";
import { useState } from "react"

import InserirNome from "./components/InserirNome.js";
import SaudacaoNome from "./components/SaudacaoNome.js";


function App() {

  const [nome, setNome] = useState()


  return (
    <div className="App">
      <h1>Usando o State Lift</h1>

      <SaudacaoNome nome={nome} />
      <InserirNome setNome={setNome} />

    </div>
  );
}

export default App;
