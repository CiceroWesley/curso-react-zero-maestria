import { useState } from 'react';
import './App.css';
//importando a imamgem, o nome da variavel é opcional

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = 'Wesley'
  const [userName] = useState('Maria')
  //la na passagem do props pode user o userName do State criado

  const cars = [
    {id:1, brand:'CVNOVO', color:'Preto', newCar: true, km:0},
    {id:2, brand:'Fiat', color:'Branco', newCar: false, km: 300},
    {id:3, brand:'Renault', color:'Cinza', newCar: true, km:0}
  ]
  return (
    <div className="App">
      <h1>Seção 3 - avançando em React</h1>
      {/*imagem na pasta public, o react acessa diretamente*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/*imagem em assets */}
      <div>
        <img src={City} alt="Cidade"/>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props tradicional. O componente pai está passando um pros (name) para o componente filho. Esta executando a variavel JS la de cima com os {} */}
      <ShowUserName name={name}/>
      {/* Desestruturando props*/}
      <CarDetails brand='VW' km={10000} color='azul' newCar={false}/>
      {/*reaproveitamento de componentes*/}
      <CarDetails brand='Fiat' km={0} color='branco' newCar={true}/>
      <CarDetails brand='Jeep' km={3000} color='vermelho' newCar={false}/>
      <CarDetails brand='CV' km={1000} color='preto'newCar={false}/>
      {/*Loop em array de objetos com props map e reaproveitamento de componente*/}
      {cars.map((car)=> (
        <CarDetails brand={car.brand} color={car.color} newCar={car.newCar} km={car.km} />
      ))}
    </div>
  );
}

export default App;
