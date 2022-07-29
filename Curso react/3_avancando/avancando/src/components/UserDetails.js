

const UserDetails = ({nome,idade,profissao}) => {
  const habilitacao = (idade)=>{
    if(idade>=18){
      return 'sim'
    } else{
      return 'não'
    }
  }

  return (
    <div>
      <p>Seu nome é: {nome}</p>
      <p>Sua idade é: {idade}</p>
      <p>Sua profissão é: {profissao}</p>
      {/*com função */}
      <p>Você pode tirar carteira de motorista? {habilitacao(idade)}</p>
      {/* com o if ternario. algum é mais recomendado que o outro?*/}
      {idade >= 18 ? (<p>Pode tirar carteira de motorista.</p>) : (<p>Não pode tirar carteira de motorista.</p>)}
      <hr />
    </div>
  )
}

export default UserDetails