import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: 'Wesley', email:'wesley@bol.com.br' ,bio:'sou um programador', role:'editor'}}/>
    </div>
  );
}

export default App;
