//css de component, tem que criar um mesmo arquivo  com a extensão css.
import './MyComponent.css'
const MyComponent = () => {
  return (
    <div>
      <h1>Css de componente</h1>
      <p>Este é um parágrafo do componente.</p>
      <p className='my-comp-paragraph'>Este também é outra parágrafo do componente.</p>
    </div>
  )
}

export default MyComponent