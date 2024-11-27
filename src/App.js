import './App.css';

function App() {

  // every code is here, inside the App function
  // 'upper' only imports
  // 'lower' only exports

  const oneName = 'IsRael'
  const caminhoDaURL = 'https://placecats.com/millie_neo/300/200'

  function sum(a,b) {
    return a + b;
  }

  return (

    // only one Parent // use className='' instead class=''
    <div className="App">

      <p>Hello world!</p>
      <span>in the React app</span>

        <div>
          <p> Using variables, my name is {oneName}</p>
          <p> I can also doing some functions here, but that is not common to doing</p>
          <p> The sum of 4 and 3 is: {sum(4,3)}</p>
          <img src={caminhoDaURL} alt='two cats being cuts' />
        </div>

    </div>
    

  );
}

export default App;
