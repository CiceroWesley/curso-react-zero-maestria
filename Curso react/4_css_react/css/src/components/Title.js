import styles from './Title.module.css'
const Title = () => {
  return (
    <div>
      {/*poderia usar styles['my_title'] mas não é convenção */}
      <h1 className={styles.my_title}>Meu título</h1>
    </div>
  )
}

export default Title