import './App.css';
import React, { useState } from 'react';
import Quotecard from './components/QuoteCard';
import axios from 'axios';

const sampleQuote = [
  {
    quote:
      "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
    characterDirection: 'Right',
  },
];

function App() {
  const [quotes, setQuotes] = useState(sampleQuote);
  const [number, setNumber] = useState(1);
  let n = 1;

  const newQuote = (n) => {
    axios
      .get(`https://simpsons-quotes-api.herokuapp.com/quotes?count=${n}`)
      .then((response) => setQuotes(response.data));
  };

  const lessQuotes = () => {
    if (number > 1) n = number - 1;
    setNumber(n);
    newQuote(n);
  };

  const moreQuotes = () => {
    n = number + 1;
    setNumber(n);
    newQuote(n);
  };

  return (
    <div className='App'>
      {quotes.map((simpleQuote, i) => (
        <Quotecard key={i} {...simpleQuote} />
      ))}
      <div className='buttonSpace'>
        <div className='lessMore'>
          <button onClick={lessQuotes}>Less please...</button>
          <button onClick={moreQuotes}>Mooooore !!!</button>
        </div>
        <div className='number'>{number}</div>
        <button onClick={() => newQuote(number)}>
          NEW QUOTES YAAAAAAY !!!
        </button>
      </div>
    </div>
  );
}

export default App;
