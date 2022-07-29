

const ExecuteFunction = ({myFunction}) => {
  //recebendo função passada por props do elemento/componente pai
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para executar a função</button>
    </div>
  )
}

export default ExecuteFunction