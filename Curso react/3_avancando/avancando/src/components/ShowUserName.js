
const ShowUserName = (props) => {
  //recebendo dados do componenete pai
  //aqui é o componente filho
  return (
    <div>
      <h2>Nome do usuário: {props.name}</h2>
    </div>
  )
}

export default ShowUserName