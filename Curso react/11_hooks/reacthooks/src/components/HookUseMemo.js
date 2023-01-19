import {useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {
  const [number, setNumber] =useState(0)
  // o useMemo tem haver com a referência do objeto
  // Uma especie de useCallBack
  // useCallback é utilizado para funções e useMemo para valores
  // const premiumNumbers = ['0', '100', '200']

  // guarda uma referência para o premiumNumbers e também não re executou mais o useEffect, porque o valor ficou memorizado (e não muda mais?)
  const premiumNumbers = useMemo(() => {
    return ['0', '100', '200']
  }, [])


  // se os premiumNumbers fossem grandes (qtd) teria que recarregar os valores toda vez que o componente renderizar e isso causaria problema de perfomace
  useEffect(() => {
    console.log('PremiumNumbers foi alterado')
  }, [premiumNumbers])

  return (
    <div>
      <h2>UseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)}/>
      {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ''}
      <hr />
    </div>
  )
}

export default HookUseMemo