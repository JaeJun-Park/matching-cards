import { Fragment, useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

// this is outside of componenet function bcs it doesnt need to re render evrytime
const cardImages = [
  { src: '/img/helmet-1.png', matched: false }, //
  { src: '/img/potion-1.png', matched: false },
  { src: '/img/ring-1.png', matched: false },
  { src: '/img/scroll-1.png', matched: false },
  { src: '/img/shield-1.png', matched: false },
  { src: '/img/sword-1.png', matched: false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort((a, c) => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  useEffect(() => {
    // update which cards are matched or not.
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        )
      }
      setTimeout(() => {
        resetTurn()
        setDisabled(false)
      }, 1000)

      // reset choiceONe, choiceTwo states and add one count to the turns(trial)
    }
  }, [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Fragment key={card.id}>
            <SingleCard card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} />
          </Fragment>
        ))}
      </div>
      <p>{turns}</p>
    </div>
  )
}

export default App
