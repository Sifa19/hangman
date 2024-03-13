import { useState } from "react";
import "./style.css";
import Hangman from "./Hangman.js"
import WrongGuessTrack from "./WrongGuessTrack.js"
import Word from "./Word.js"
import Keyboard from "./Keyboard.js"
import Popover from "./Popover.js"
import Reset from "./Rest.js"
import randomWords from "./data.js";

const Won = () => {
  return <div>WON</div>;
};

const Lost = () => {
  return <div className="lost">Ooops... You Lost!</div>
}

function App() {
  const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase();
  const [word, setWord] = useState(randomWord.split(""));
  const [correctGuess, setCorrectGuess] = useState([]);
  const [guessedChar, setGuessedChar] = useState([]);
  const [noOfWrongGuess, setNoOfWrongGuess] = useState(0);

  var arr = word.filter(function (item) {
    return item !== " ";
  });
  const ans = new Set(arr);
  const won = word.length > 0 && correctGuess.length === ans.size;

  return (
    <div className="container">
      <div className="game-app">
        <div className="game-display">
          <Hangman />
          <Word word={word} correctGuess={correctGuess} />
          <WrongGuessTrack noOfWrongGuess={noOfWrongGuess} />
        </div>
        <div className="keyboard-container">
          <Keyboard
            word={word}
            guessedChar={guessedChar}
            setGuessedChar={setGuessedChar}
            setNoOfWrongGuess={setNoOfWrongGuess}
            setCorrectGuess={setCorrectGuess}
          />
          <div className="rest-btn">
            <Reset
              setWord={setWord}
              setCorrectGuess={setCorrectGuess}
              setGuessedChar={setGuessedChar}
              setNoOfWrongGuess={setNoOfWrongGuess}
            >
              REST
            </Reset>
          </div>
        </div>
      </div>
      {
        noOfWrongGuess >= 6 &&
        <Popover>
          <Lost />
          <Reset
            setWord={setWord}
            setCorrectGuess={setCorrectGuess}
            setGuessedChar={setGuessedChar}
            setNoOfWrongGuess={setNoOfWrongGuess}
          >
            Try Again
          </Reset>
        </Popover>
      }
      {
        won &&
        <>
          <Popover>
            <Won />
            <Reset
              setWord={setWord}
              setCorrectGuess={setCorrectGuess}
              setGuessedChar={setGuessedChar}
              setNoOfWrongGuess={setNoOfWrongGuess}
            >
              PLAY NEW GAME
            </Reset>
          </Popover>
        </>
      }
    </div>
  );
}

export default App;
