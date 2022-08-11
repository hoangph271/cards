import { useState } from 'react'
import { Card, CardData, _getRandomCard } from './components/Card'
import './App.css'

function App () {
  const [card, setCard] = useState<CardData | null>(null)

  return (
    <div className="App">
      <button onClick={() => setCard(_getRandomCard())}>
        Random card...!
      </button>
      <Card {...card ?? { title: 'N/A', logo: '/vite.svg', caption: 'N/A' }} />
    </div>
  )
}

export default App
