import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, content, listId, deleteCard, cardId }) => {
  return (
    <div className='card'>
      <div>
        <h3>{title}</h3>
        <button type='button' onClick={() => deleteCard(listId, cardId)}>
          delete
        </button>
      </div>
      <p>{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Card;
