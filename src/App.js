import "./App.css";
import Lista from "./components/Lista.js";
import ListaComObjeto from "./components/ListaComObjeto.js";

function App() {
  const grupoTecnologias = [
    "bootstrap",
    "react",
    "css",
  ];

  const grupoObjetos = [
    {tec: 'NodeJS', local: 'back-end'},
    {tec: 'JS', local: 'front-end'},
    {tec: 'Java', local: 'back-end'},
    {tec: 'SQL', local: 'banco de dados'},
  ]

  return (
    <div className="App">
      <h2>Renderização de lista (com condicional também)</h2>
      <Lista itens={grupoTecnologias} />
      <ListaComObjeto itens={grupoObjetos} />
      <ListaComObjeto itens={[]} />
    </div>
  );
}

export default App;
