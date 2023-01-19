import { useReducer, useState } from "react"

const HookUseReducer = () => {
  // 1 - começanco com o useReducer
  // executar uma função antes de alterar seu valor. Como que uma função antes do setValue do useState
  const [number, dispatch] = useReducer((state, action) => {
    // está pegando o estado atual e colocando no método random
    // função dispatch alterar o estado atual
    return Math.random(state)
  })

  // 2 - avançando em useReducer
  const initialTasks = [
    {id: 1, text: 'Fazer alguma coisa'},
    {id: 2, text: 'Fazer outra coisa'}
  ]

  const taskReducer = (state, action) => {
    // só faz sentido se tiver mais casos
    switch(action.type){
      case 'ADD':
        // cria uma nova tarefa
        const newTask = {
          id: Math.random(),
          // taskText do onChange do form
          text: taskText
        }
        // reseta o valor
        setTaskText('')

        // retorna o estado atual com a nova tarefa
        return [...state, newTask]
      case 'DELETE':
        return state.filter((task) => task.id !== action.id)

      default:
        // só retorna o estado atual
        return state
    }

  }


  const [taskText, setTaskText] = useState('')
  // função que vai alterar o estado (taskReducer) e o estdo inicial (initialTasks)
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  

  const handleSubmit = (e) => {
    e.preventDefault()

    // fazer o tratameto do dado com o Reducer
    dispatchTasks({type: 'ADD'})

  }

  const removeTask = (id) => {
    // passando o case de delete e o id
    dispatchTasks({type: 'DELETE', id: id})
  }

  return (
    <div>
      <h2>UseReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
        <input type="submit"value='Enviar'/>
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
      ))}

      <hr />
    </div>
  )
}

export default HookUseReducer