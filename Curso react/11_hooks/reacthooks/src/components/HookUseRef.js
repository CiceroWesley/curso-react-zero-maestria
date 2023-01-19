import {useEffect, useState, useRef} from 'react'

const HookUseRef = () => {
  // 1 - useRef
  const numberRef = useRef(0)
  const [counter, setCounter] = useState(0)
  const [counterB, setCounterB] = useState(0)

  useEffect(() => {
    numberRef.current = numberRef.current + 1
    // o ref não entra em loop infinito e o State sim, pois a cada vez que o valor se altera o componente é rerenderizado (o useEffect executa a cada rerenderização está sem o array)
    // setCounter(counter + 1)
  })

  // o useRef não rerenderiza (seu valor não é resetado a cada atualização de componente)

  // 2 - useRef e DOM
  // o useRef pode manipular o DOM também, selecionando seus elementos
  const inputRef = useRef()
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(inputRef)


    setText('')

    inputRef.current.focus()
  }

  return (
    <div>
      <h2>UseRef</h2>
      {/* 1 - useRef */}
      <p>O componente renderizou: {numberRef.current} vezes.</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange ={(e) => setText(e.target.value)}/>
        <input type="submit" value='Enviar' />
      </form>
      <hr />
    </div>
  )
}

export default HookUseRef