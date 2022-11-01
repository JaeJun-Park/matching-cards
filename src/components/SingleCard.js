import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" onClick={() => {console.log('clicked'); handleChoice(card)}} src="/img/cover.png" alt="card back" />
      </div>
    </div>
  )
}
