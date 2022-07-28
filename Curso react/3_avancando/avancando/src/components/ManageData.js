import { useState } from "react"

const ManageData = () => {
  let SomeData = 10

  console.log(SomeData)
  //quando a variavel é atualizada seu valor, o react não a re renderiza novamente, se não for com o useState hook

  //criando hook

  const [number, setNumber] = useState(20)

  return (
    <div>
      <div>
        <p>Valor: {SomeData}</p>
        <button onClick={() => (SomeData = 15)}>Alterar valor</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        {/* arrow function simplificada*/}
        <button onClick={() => (setNumber(number+10))}>Mudar o state</button>
      </div>
    </div>

  )
}

export default ManageData