import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(false)
  const [name,setName] = useState('Wesley')

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/*Condicional simples, a variavel boleana e && a mensagem que quer imprimir/ a  instrução que deseja executar */}
      {x && <p>O x é verdadeiro</p>}
      {!x && <p>O x é falso</p>}
      <h1>If ternário</h1>
      {/* condição ? () : () o () é usado porque é um objeto*/}
      {name === 'João' ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={()=> setName('João')}>Clique aqui</button>
    </div>
  )
}

export default ConditionalRender