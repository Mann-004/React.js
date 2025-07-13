import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [prevRandom, setPrevRandom] = useState(null);
  const [playGame, setPlayGame] = useState(true);
  const [result, setResult] = useState('');
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(10);


  useEffect(() => {
    const first = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(first);
    setPrevRandom(first);
    console.log(`🔢 Starting random number: ${first}`);
  }, []);

  const handleGuess = (e) => {
    e.preventDefault();
    const guessedNumber = parseInt(number);

    if (isNaN(guessedNumber)) {
      setResult('❌ Please enter a valid number');
    } else if (guessedNumber < 1 || guessedNumber > 100) {
      setResult('❌ Number must be between 1 and 100');
    } else {
      processGuess(guessedNumber);
    }

    setNumber('');
  };

  const processGuess = (guessedNumber) => {
    if (prevGuesses.includes(guessedNumber)) {
      setResult(`⚠️ You already guessed ${guessedNumber}`);
      return;
    }

    const updatedGuesses = [...prevGuesses, guessedNumber];
    setPrevGuesses(updatedGuesses);
    const guessesLeft = remainingGuesses - 1;
    setRemainingGuesses(guessesLeft);

    if (guessedNumber === randomNumber) {
      setResult(`🎉 Correct! You guessed ${randomNumber}.`);
      setPlayGame(false); 
    } else if (guessesLeft === 0) {
      setResult(`❌ Game Over! The number was ${randomNumber}`);
      setPlayGame(false);
    } else if (guessedNumber < randomNumber) {
      setResult('🔼 Try a higher number');
    } else {
      setResult('🔽 Try a lower number');
    }
  };

  const resetGame = () => {
    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * 100) + 1;
    } while (newNumber === prevRandom);
    setRandomNumber(newNumber);
    setPrevRandom(newNumber);
    console.log(`🔁 New random number: ${newNumber}`);

   
    setPrevGuesses([]);
    setRemainingGuesses(10);
    setResult('');
    setNumber('');
    setPlayGame(true); 
  };

  return (
    <div className="bg-zinc-900 w-full h-screen text-white">
      <div className="container w-full min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleGuess}
          className="card h-[auto] bg-zinc-200 text-black p-6 w-[450px] text-center rounded-xl flex items-center justify-center flex-col"
        >
          <h1 className="text-2xl font-bold mb-2">Guess a number between 1 and 100</h1>

          {playGame && (
            <>
              <input
                type="text"
                placeholder="Enter your guess"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="px-3 py-2 mt-3 w-3/4 rounded-lg outline-none"
              />
              <button className="bg-green-600 text-white py-2 px-6 mt-3 rounded-lg">
                Guess
              </button>
            </>
          )}

          <div className="mt-4 text-md font-semibold">
            {result && <p>{result}</p>}
          </div>

          <div className="mt-2 text-lg">
            <strong>Guessed Numbers:</strong> {prevGuesses.join(', ') || '-'}
          </div>
          <div className="mt-2 text-lg">
            <strong>Attempts Left:</strong> {remainingGuesses}
          </div>

          {!playGame && (
            <>
              <div className="mt-4 text-xl font-semibold text-red-600">
                 The correct number was: <span className="font-bold">{randomNumber}</span>
              </div>
              <button
                onClick={resetGame}
                type="button"
                className="bg-blue-600 text-white py-2 px-5 mt-5 rounded-lg"
              >
                🔁 Play Again
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
