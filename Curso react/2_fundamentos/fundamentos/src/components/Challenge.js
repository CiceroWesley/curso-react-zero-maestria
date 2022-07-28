const Challenge = () => {
  let a = Math.floor(Math.random() * 10 + 1)
  let b = Math.floor(Math.random() * 10 + 1)

  const HandleSomar = () =>{
    console.log(a+b)
  }
  return (
    <div>
        <h2>Valor de a: {a}</h2>
        <h2>Valor de b: {b}</h2>
        <button onClick={HandleSomar}>Somar</button>
    </div>

  )
}

export default Challenge