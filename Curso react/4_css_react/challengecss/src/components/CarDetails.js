
import styles from './CarDetails.module.css'

const CarDetails = ({car}) => {
  return (
    <div className={styles.car}>
      <h2 >Marca: {car.marca}</h2>
      <ul>
        <li >Valor: {car.valor}</li>
        <li >KM: {car.km}</li>
        <li >Tipo de combustível: {car.combustivel}</li>
      </ul>
    </div>
  )
}

export default CarDetails