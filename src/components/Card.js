import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className='card'>
      <div>
        <h3>{title}</h3>
        <button type='button'>delete</button>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Card;
