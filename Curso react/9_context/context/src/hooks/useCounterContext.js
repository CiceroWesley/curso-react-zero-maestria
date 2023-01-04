import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// refatorando contexto para hook
// So chama o hook no componente não necessitando usar o useContext em todos os componentes.

export const useCounterContext = () => {

  const context = useContext(CounterContext)

  if (!context) {
    console.log("Contexto não encontrado.")
  }

  return context

}
