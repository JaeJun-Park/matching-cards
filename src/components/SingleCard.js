import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped }) {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" onClick={() => {
          handleChoice(card)
        }} src="/img/cover.png" alt="card back" />
      </div>
    </div>
  )
}

// 