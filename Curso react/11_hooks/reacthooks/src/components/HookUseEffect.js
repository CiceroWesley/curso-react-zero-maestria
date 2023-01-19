import { useEffect, useState } from "react"

const HookUseEffect = () => {
  // 1 useEffect , sem dependências
  // sem dependências ele é executado toda vez que o componente for rerederizado
  useEffect(() => {
    console.log('Estou sendo executado')
  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }

  // 2 - array de dependências vazio
  // quando o array está vázio o Effect é executado apenas uma vez quando o componente é rederizado
  useEffect(() => {
    console.log('Serei executado apenas uma vez')
  }, [])

  // 3 - item no array de dependências
  // o Effect é executado quando os valores do array de dependências mudarem
  // quando seus valores forem alterados
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {
    // para não executar a primeira vez
    if(anotherNumber > 0){
      console.log('Sou executando apenas quando o anotherNumber muda')
    }

  }, [anotherNumber])

  // 4 - cleanup do useEffect
  useEffect(() => {
    // esse função é executado no outro componente no About, mesmo só sendo deste
    // FOI COMENTADO para não atrapalhar o log do console
    // const timer = setTimeout(() => {
    //   console.log('Hello World')

    //   // chamando a cada 2 segundos porqu eo anotherNumber muda
    //   // setAnotherNumber(anotherNumber + 1)
    // }, 2000)

    // // com esse função é limpado e não é passado para outro componente 
    // // Dessa forma, o useEffect não fica em outra página
    // return () => clearTimeout(timer)

  }, [anotherNumber])

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
      <hr />
    </div>
  )
}

export default HookUseEffect