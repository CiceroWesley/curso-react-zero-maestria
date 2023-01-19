import {useCallback, useState} from 'react'

import List from './List'

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0)

  // deixa a função armazenada no sistema e não reexecutada a não ser que queira
  const getItemsFromDatabase = useCallback(() => {
    return ['a', 'b', 'c']
  }, [])

  // toda vez que alterar o State do Counter a função de buscar itens é reexecutada, mesmo que os dados sejam os mesmos
  // Ele recarrega o getItemsFromDatabase e ele recarrega o item do componente List
  return (
    <div>
      <h2>UseCallback</h2>
      <List getItems={getItemsFromDatabase}/>
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  )
}

export default HookUseCallback