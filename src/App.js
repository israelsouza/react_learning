import './App.css';
import PessoaSimples from './components/entidade/PessoaComChamadaSimples.js'
import PessoaComplexa from './components/entidade/PessoaComChamadaMaisDetalhada.js'

function App() {

  // every code is here, inside the App function
  // 'upper' only imports
  // 'lower' only exports

  const oneName = 'IsRael'
  const caminhoDaURL = 'https://placecats.com/millie_neo/300/200'

  return (

    // only one Parent // use className='' instead class=''
    <div className="App">

        <div>
          <p> Using variables, my name is {oneName}</p>
          <img src={caminhoDaURL} alt='two cats being cuts' />
        </div>

        <div>
          <PessoaSimples name="João"/>
          <PessoaSimples name="Maria antônia"/>
        </div>

        <div>
          <PessoaComplexa age="51" profission="teacher" name="Roberto" studant="Programação" url="https://placecats.com/neo_banana/300/200" />
        </div>


    </div>
    

  );
}

export default App;
