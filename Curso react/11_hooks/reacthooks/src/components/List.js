import {useState, useEffect} from 'react'

const List = ({getItems}) => {
  const [myItems, setMyItems] = useState([])


  // No momento que o getItems mudar o myItems é setado novamente, por exemplo quando receber mais itens do banco
  useEffect(() => {
    console.log('Buscando itens do DB...')

    setMyItems(getItems)
  }, [getItems])

  return (
    <div>
      {myItems && myItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

export default List