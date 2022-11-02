import React from 'react'
import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled, shake }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <div className="card">
      <div className={`${flipped ? "flipped" : ""} ${shake && flipped ? "shaking" : ""}`}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" onClick={handleClick} src="/img/cover.png" alt="card back" />
      </div>
    </div>
  )
}

// 