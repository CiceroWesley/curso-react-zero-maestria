const TemplateExpressions = () => {
  const name = "Wesley"
  const info = {
    age: 22,
    job: "student"
  }

  return (
    <div>
      <h4>Hey, {name}!</h4>
      <p>Você tem {info.age} anos e é um {info.job}</p>
      <p>{3 + 3}</p>
      <p>{console.log("Executando JS dentro do JSX")}</p>
    </div>
  )
}

export default TemplateExpressions