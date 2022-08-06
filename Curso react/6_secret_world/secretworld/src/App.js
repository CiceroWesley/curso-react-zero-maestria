// CSS
import './App.css';
// React
import { useCallback, useEffect, useState } from 'react';
// Data
import { wordsList } from './data/words';
// componentes
import StarScreen from './components/StarScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: 'end'}
]
const guessesQtd = 3
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord,setPickedWord] = useState('')
  const [pickedCategory,setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses,setGuesses] = useState(guessesQtd)
  const [score,setScore] = useState(0)

  const pickWordAndCategory = useCallback(()=>{
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    // console.log(categories)
    console.log(category)
    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)
    //retornando objeto
    return {word,category}

  },[words])

  //start the secret word game
  const startGame = useCallback(()=>{
    //reset all letters
    clearLetterStage()
    //pick word and pick category
    //desestruturando objeto recebido
    const {word, category } = pickWordAndCategory()
    //create an array of letters

    let wordsLetters = word.split("")

    //normalizando as letras das palavras. não poderia normalizar antes de separar não? seria mais fácil.
    wordsLetters = wordsLetters.map((l)=>(
      l.toLowerCase()
    ))

    console.log(word,category)
    console.log(wordsLetters)

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    
    setLetters(wordsLetters)

    setGameStage(stages[1].name)

  },[pickWordAndCategory])

  //process the leter input
  const verifyLetter = (letter)=>{
    const normalizedLetter = letter.toLowerCase()

    //check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }

    //push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters)=>[
        ...actualGuessedLetters, normalizedLetter
      ])
    } else{
      setWrongLetters((actualWrongLetters)=>[
        ...actualWrongLetters, normalizedLetter
      ])
      setGuesses((actualGuesses)=> actualGuesses - 1)
    }


    console.log(letter)

    //setGameStage(stages[2].name)
  }

  const clearLetterStage = ()=>{
    setGuessedLetters([])
    setWrongLetters([])
  }
  //check if guesses ended
  useEffect(()=>{
    if(guesses <= 0){
      //reset all stages
      clearLetterStage()
      setGameStage(stages[2].name)
    }
  },[guesses])

  //check win condition 
  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      //add score
      setScore((actualScore)=> (actualScore + 100))

      //restart game with new word
      startGame()
    }
  },[guessedLetters, letters, startGame])

  const retry = ()=>{
    setGuesses(guessesQtd)
    setScore(0)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StarScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
