// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

// quando deseja gerenciar um mesmo valor em vários componentes, usa o contexto.
// uma alternativa seria as props e caoso fosse uma função queria de StateLeft subir para o componente pai

const About = () => {
  // extraindo valor do contexto

  const {contextValue} = useContext(SomeContext)
  return (
    <div>
      <h2>About</h2>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default About