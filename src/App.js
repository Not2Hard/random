
import './App.css';
import NumberGenerator from './components/NumberGenerator'
// import Chart from './components/Charts/Chart'

function App() {
  const numbers = [
    {
      name: '1th',
      number: 1,
      pv: 3,
    },
    {
      name: '2th',
      number: 2,
      pv: 5,
    },
    {   
    name: '3th',
    number: 3,
    pv: 8,
    }
    
  ]
  return (
    <div className="App">
      <header className="App-header">
      <NumberGenerator />
      {/* <Chart numbers={numbers}/> */}
       
      </header>
    </div>
  );
}

export default App;
