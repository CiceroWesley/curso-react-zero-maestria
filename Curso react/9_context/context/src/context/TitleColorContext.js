//  criando um contexto mais complexo
import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

// alterando contexto mais complexo
export const titleColorReducer = (state, action) =>{
  // switch
  // alterar valor do contexto complexo
  switch(action.type){
    case "RED":
      return {...state, color: 'red'}
    case "BLUE":
      return {...state, color: 'blue'}
    default:
      return state
  }
}

export const TitleColorContextProvider = ({children}) =>{
  // estado e função
  // quem altera o estado e o valor inicial
  const [state, dispatch] = useReducer(titleColorReducer, {color: 'purple'})
  console.log("Title color context: ",state)
  return (
    <TitleColorContext.Provider value={{...state, dispatch}}>
      {children}
    </TitleColorContext.Provider>
  )
}