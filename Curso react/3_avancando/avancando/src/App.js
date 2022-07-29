import {useState } from 'react';
import './App.css';
//importando a imamgem, o nome da variavel é opcional

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = 'Wesley'
  //const [userName] = useState('Maria')
  //la na passagem do props pode user o userName do State criado

  const cars = [
    {id:1, brand:'CVNOVO', color:'Preto', newCar: true, km:0},
    {id:2, brand:'Fiat', color:'Branco', newCar: false, km: 300},
    {id:3, brand:'Renault', color:'Cinza', newCar: true, km:0}
  ]

  function showMessage(){
    console.log('Evento do componente pai')
  }

  const [message,setMessage] = useState('')

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  const people = [
    {id:1, nome: 'Wesley', idade:22, profissao:'estudante'},
    {id:2, nome: 'Pedro', idade:24, profissao:'professor'},
    {id:3, nome: 'Cicero', idade:16, profissao:'empreendedor'},
    {id:4, nome: 'Lucas', idade:30, profissao:'engenheiro'},
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
        //com a key que o react pede
        <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km} />
      ))}
      {/*Fragment*/}
      <Fragment propFragment = 'teste'/>
      {/*Children */}
      <Container myValue='testing'>
        <p>Esse é o conteúdo</p>
      </Container>
      <Container myValue='testing 2'>
        <h4>Outro filho</h4>
      </Container>
      {/*Executando função em props */}
      <ExecuteFunction myFunction={showMessage}/>
      {/*State lift */}
      {/*Está exibindo a mensagem*/}
      <Message msg={message}/>
      {/*Está alterando o estado/mensagem pela função do app handleMessage. está elevando a alteração do componente filho para o componente pai/aqui*/}
      <ChangeMessageState handleMessage={handleMessage}/>

      {/*Exercício seção 3*/}
      {people.map((person)=>(
        <UserDetails key={person.id} nome={person.nome} idade={person.idade} profissao={person.profissao}/>
      ))}

    </div>
  );
}

export default App;
