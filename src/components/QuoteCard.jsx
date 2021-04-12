import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ image, character, quote, characterDirection }) => {
  return (
    <div className='QuoteCard'>
      <div className={characterDirection}>
        <img src={image} alt={character} className='avatar' />
        <div className='quoteContainer'>
          <h3 className='name'>{character}</h3>
          <p className='quote'>{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
