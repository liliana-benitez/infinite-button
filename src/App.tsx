import { useState } from 'react'
import './App.css'
import phrases from './comments'

function App() {

  const [phrase, setPhrase] = useState('')

  function randomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    return phrases[randomIndex]
  }

  function handleClick() {
    console.log(randomPhrase())
    setPhrase(randomPhrase())
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <button className='border rounded-md px-4 py-2 text-3xl' onClick={handleClick}>Click Me</button>
      {!phrase && <div className='text-transparent'>Invisible text</div>}
      {phrase && 
      <div>{phrase}</div>}
    </div>
  )
}

export default App
