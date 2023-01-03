import './App.css';

//1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
//as páginas são como se fossem componentes e suas importações são iguais
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound';
import Search from './pages/Search';

//componentes

import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* Elementos que se repetem */}
        {/*2 - links com react router */}
        <Navbar/>
        {/* 9 - search */}
        <SearchForm/>
        <Routes>
          {/* Elementos que vão sempre mudar? */}
          {/* Roteamento da aplicação */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 6 - neste route */}
          <Route path='/products/:id/info' element={<Info/>}/>
          {/* 4 - rota dinâmica */}
          <Route path='/products/:id' element={<Product/>}/>
          {/* 9 - search */}
          <Route path='/search' element={<Search/>}/>
          {/* 10 - redirect */}
          {/* rota antiga do about era company, a company redireciona para a about */}
          <Route path='/company' element={<Navigate to='/about' />}/>
          {/* 7 - no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
