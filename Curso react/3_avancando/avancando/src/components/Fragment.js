const Fragment = ({propFragment}) => {
  return (
    //removendo o elemento pai, que antes era a div para o fragment <>, ao ver o código html no navegador, é notavél que nada envolve o h2 e o h3. Agora é possível ter dois os mais elementos pais com o fragment utilizado.
    <>
      <h2>Primeiro título</h2>
      <h3>Segundo título</h3>
      <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment