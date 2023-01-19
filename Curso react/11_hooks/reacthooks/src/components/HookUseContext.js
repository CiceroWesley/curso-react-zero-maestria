import { createContext } from "react";

// criando o contexto
export const SomeContext = createContext()

// criando o provider
// children para poder envolver os componentes que poderão acessar o valor do contexto
export const HookUseContext = ({children}) => {
  const contextValue = 'testing context'

  return (
    // o value é o valor que podera ser acessado
    <SomeContext.Provider value={{contextValue}}>
      {children}
    </SomeContext.Provider>
  )
}