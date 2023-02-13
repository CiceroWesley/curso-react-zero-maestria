import { useState, ChangeEvent } from 'react'

const State = () => {
  const [text, setText] = useState<string | null>(null)

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
    </div>
  )
}

export default State