import { Fragment, useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

// this is outside of componenet function bcs it doesnt need to re render evrytime
const cardImages = [
  { src: '/img/helmet-1.png' }, //
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort((a, c) => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src == choiceTwo.src) {
        console.log('same')
      } else {
        console.log('different')
      }
      resetTurn();
    }
  }, [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Fragment key={card.id}>
            <SingleCard card={card} handleChoice={handleChoice} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default App
