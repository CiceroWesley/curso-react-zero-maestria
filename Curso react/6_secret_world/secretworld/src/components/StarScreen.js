import './StartScreen.css'

const StarScreen = ({startGame}) => {
  return (
    <div className='start'>
      <h1>Secret World</h1>
      <p>Clique no botão abaixo para começar o jogo.</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StarScreen