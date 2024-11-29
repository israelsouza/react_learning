import './App.css';
import SomarDoisValores from './components/SomarDoisValores.js'
import PessoaComplexa from './components/entidade/PessoaComChamadaMaisDetalhada.js'
import Form from './components/form/formElements.js'

function App() {

  return (

    <div className="App">

        <div>
          <PessoaComplexa age="51" profission="teacher" name="Roberto" studant="Programação" />
        </div>

        <Form />

        <SomarDoisValores />

    </div>

  );
}

export default App;
