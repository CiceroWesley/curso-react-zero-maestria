import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {marca: 'CV', valor: 10000, km: 0, combustivel: 'gasolina'},
    {marca: 'Jeep', valor: 15000, km: 10000, combustivel: 'diesel'},
    {marca: 'Fiat', valor: 9000, km: 0, combustivel: 'gasolina'},
    {marca: 'TW', valor: 18000, km: 10000, combustivel: 'diesel'},
  ]
  return (
    <div className="App">
      <h1>Desafio 5 - carros</h1>
      <div className='cars'>
        {cars.map((car)=>(
          <CarDetails car={car}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
