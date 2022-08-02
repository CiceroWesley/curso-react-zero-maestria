import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 11
  const [name] = useState('Wesley')
  const redTitle = true
  return (
    <div className="App">
      {/*Css global */}
      <h1>React com CSS</h1>
      {/*Css de componente. ele vaza pra outras tags */}
      <MyComponent/>
      <p>Parágrafo do App.js</p>
      {/*Inline css */}
      <p style={{color: 'white', padding: '20px', borderBottom: '2px solid red'}}>
        Esse parágrafo possui estialização inline.
      </p>
      {/*css inline dinâmico */}
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS inline dinâmico</h2>
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS inline dinâmico</h2>
      <h2 style={name === 'Wesley' ? ({color: 'green', backgroudColor: 'black'}) : null}>CSS inline dinâmico</h2>
      {/*classes dinâmicas*/}
      <h2 className={redTitle ? 'red-title' : 'title'}>Classes dinâmicas</h2>
      {/*CSS module. essa forma não vaza css para outros componentes ou tags, é scopped. css restrito ao componente*/}
      <Title/>
      <h2 className='my_title'>Meu título</h2>
    </div>
  );
}

export default App;
