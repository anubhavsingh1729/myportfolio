import React from 'react';
import '../css/cards.css'; 

const Cards = ({ onCardClick, expandedCard }) => {
  const cards = [
    { id: 1, title: 'Education & Experience', description: 'Three turns, should do it, I think.', image: "/timeturner.gif"},
    { id: 2, title: 'Projects & Blogs', description: 'This? It is called a Pensieve.',image: "/pensieve.webp" },
    { id: 3, title: 'Skills and Certifications', description: 'If you have to ask, you’ll never know. If you know, you need only ask.',image: "/roomofreq.png" },
    { id: 4, title: 'Contact', description: 'Owl Post is reliable, usually.',image: "/hedwig.jpg" }
  ];

  return (
    <section id="cards" className="cards">
      <div className="card-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${expandedCard === card.id ? 'expanded' : ''}`}
            onClick={() => onCardClick(card.id)}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <h3 className='card-title'>{card.title}</h3>
            {expandedCard === card.id ? <p>{card.description}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;