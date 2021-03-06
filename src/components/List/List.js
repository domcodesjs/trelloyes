import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const List = ({ header, cardIds, allCards, addCard, listId, deleteCard }) => {
  return (
    <section className='list'>
      <header>
        <h2>{header}</h2>
      </header>
      <div className='list-cards'>
        {cardIds.map((id) => {
          if (!allCards[id]) {
            return;
          }
          return (
            <Card
              listId={listId}
              deleteCard={deleteCard}
              key={id}
              cardId={id}
              title={allCards[id].title}
              content={allCards[id].content}
            ></Card>
          );
        })}
      </div>
      <button
        type='button'
        className='list-add-card'
        onClick={() => addCard(listId)}
      >
        + Add Random Card
      </button>
    </section>
  );
};

List.propTypes = {
  header: PropTypes.string.isRequired,
  cardIds: PropTypes.array.isRequired,
  allCards: PropTypes.object.isRequired
};

export default List;
