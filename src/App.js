import './App.css';
import PessoaSimples from './components/entidade/PessoaComChamadaSimples.js'
import PessoaComplexa from './components/entidade/PessoaComChamadaMaisDetalhada.js'
import ListaHistoria from './components/ListaEstudosHistoria.js'

function App() {

  return (

    <div className="App">

        <div>
          <PessoaSimples name="Maria antônia"/>
          <PessoaComplexa age="51" profission="teacher" name="Roberto" studant="Programação" url="https://placecats.com/neo_banana/300/200" />
        </div>

        <div>
          <h2>História</h2>
          <ListaHistoria assunto='Inquisição' ano={1480}  />
          <ListaHistoria ano={1964} pais={'Brasil'}  />
          <ListaHistoria ano={1880}  />
        </div>

    </div>

  );
}

export default App;
