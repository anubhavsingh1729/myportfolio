import React from 'react';
import '../css/cards.css'; 

const Cards = ({ onCardClick, expandedCard }) => {
  const cards = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' }
  ];

  return (
    <section id="cards" className="cards">
      <h2>My Projects</h2>
      <div className="card-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${expandedCard === card.id ? 'expanded' : ''}`}
            onClick={() => onCardClick(card.id)}
          >
            <h3>{card.title}</h3>
            {expandedCard === card.id ? <p>{card.description}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;