const Events = () => {
  //a função tem acesso ao event (e)
  const HandleMyEvent = (e) => {
    console.log(e)
    console.log("Você clicou no botão.")
  }

  const HandleClick = () =>{
    console.log('Você clicou.')
}
  //função de renderização. ela pode retornar um jsx
  const renderSomething = (x) => {
      if(x){
          return <h1>Retornando verdadeiero</h1>
      }
      else{
          return <h1>Retornando falso</h1>
      }
  }

  return (
    <div>
      <div>
        <button onClick={HandleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={HandleClick}>Botão 1</button>
      </div>
      <div>
        {/*pode escrever a funcao no proprio evento porem, mistura html com o código js */}
        <button onClick={()=> console.log('Você clicou na função do evento')}>Botão 2</button>
      </div>
      <div>
        <button onClick={() => {
                    if(true){
                        console.log('Mistura muito')
                    }
        }}>Botão 3</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events