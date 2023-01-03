//2 - links com react router
import "./Navbar.css"

import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      {/*A tag Link é como se fosse a tag a para permitir a navegação */}
      {/* {a tag A faz um reload da página já o link não, ele apenas troca o componente*/}
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      {/* {<a href="/">Home</a>} */}
      {/* 8 - Link ativo */}
      {/* Mostrar uma cor diferenciada para a página que o usuário está, o link ativo com o Active do proprio Navlink. Classe dinâmica Active */}
      {/* Colocando o className tem que colocar o estilo individual nela */}
      {/* <NavLink to='/' className={(isActive) => (isActive ? "esta-ativo" : "nao-ativo")}>Home</NavLink> */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>Sobre</NavLink>
    </nav>
    
  )
}

export default Navbar