
//comentarios com na parte lógica//

import MyComponent from "./MyComponent"

/*comentarios multiplas linhas */

const FirstComponent = () =>{
  return (
    <div>
      {/*comentários aqui dentro no jsx. so tem um elemento pai no return */}
      <h4>Componente</h4>
      <p>Aqui se tem um componente</p>
      <MyComponent/>
    </div>
  )
}

export default FirstComponent