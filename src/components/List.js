import React from 'react';
import Card from './Card';

const List = ({ header, cardIds, allCards }) => {
  return (
    <section className='list'>
      <header>
        <h2>{header}</h2>
      </header>
      <div className='list-cards'>
        {cardIds.map((id) => (
          <Card
            key={id}
            title={allCards[id].title}
            content={allCards[id].content}
          ></Card>
        ))}
      </div>
      <button type='button' className='list-add-card'>
        + Add Random Card
      </button>
    </section>
  );
};

export default List;
