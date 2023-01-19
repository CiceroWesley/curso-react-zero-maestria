import {useRef} from 'react'


import SomeComponent from './SomeComponent'

const HookUseImperativeHandle = () => {
  const componentRef = useRef()



  return (
    <div>
      <h2>useImperativeHandle</h2>
      {/* Não se pode passar referências como props, por esse motivo se usa o ImperativeHandle */}
      <SomeComponent ref={componentRef}/>
      {/* O componente pai consegue executar uma função no componente filho */}
      <button onClick={() => componentRef.current.validate()}>Validate</button>
      <hr />
    </div>
  )
}

export default HookUseImperativeHandle