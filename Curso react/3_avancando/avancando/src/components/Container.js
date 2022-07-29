

const Container = ({children,myValue}) => {
  return (
    //com o children está pegando os filhos do componente container e imprimindo
    //usado se o nosso elemento abraça outros
    <div>
      <h2>Este é o título do container</h2>
      {children}
      <p>O valor é: {myValue}</p>
    </div>
  )
}

export default Container