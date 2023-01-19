import './App.css';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import { HookUseContext } from './components/HookUseContext';


// pages
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>Sobre</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>

          </Routes>
        </BrowserRouter>
      </HookUseContext>

    </div>
  );
}

export default App;
