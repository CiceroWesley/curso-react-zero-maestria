// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const About = () => {
  // sem o hook
  // const {counter} = useContext(CounterContext)

  // usando o contexto pelo hook
  const {counter} = useCounterContext()

  // 5 - context mais complexo
  const { color} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color}}>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About