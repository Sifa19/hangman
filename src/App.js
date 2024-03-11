import { useState } from "react";
import "./style.css";

const randomWords = [
  "mask",
  "adopt",
  "different",
  "threaten",
  "argument",
  "reptile",
  "arena",
  "ground",
  "ego",
  "happen",
];

const Hangman = () => {
  return <div className="hangman">hangman</div>;
};

const Word = ({ word, correctGuess }) => {
  return (
    <div className="word-conatiner">
      <div className="word">
        {word.map((ch, i) => {
          if (ch.charCodeAt(0) === 32)
            return <span className="space"></span>;
          return (
            <div
              className={`${correctGuess.includes(ch.charCodeAt(0)) ? "" : "hide"
                }`}
            >
              {ch}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const WrongGuessTrack = ({ noOfWrongGuess }) => {
  return (
    <div className="track-wrong-guess">
      <span>{noOfWrongGuess}/6</span>
    </div>
  );
};

const Keyboard = ({
  word,
  guessedChar,
  setGuessedChar,
  setNoOfWrongGuess,
  setCorrectGuess,
}) => {
  // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  // const alphabets = alpha.map((a) => String.fromCharCode(a))
  // console.log(alphabets);

  function handleGuessChar(val) {
    setGuessedChar((g) => [...g, val]);

    const isVowel = ["A", "E", "I", "O", "U"].includes(
      String.fromCharCode(val)
    );

    const wordToGuess = word.includes(String.fromCharCode(val));

    if (wordToGuess) setCorrectGuess((w) => [...w, val]);

    if (!isVowel && !wordToGuess) setNoOfWrongGuess((s) => s + 1);
  }

  const alphabets_row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const alphabets_row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const alphabets_row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="keyboard">
      <div>
        {alphabets_row1.map((a) => {
          return (
            <button
              className="btn"
              onClick={() => handleGuessChar(a.charCodeAt(0))}
              disabled={guessedChar.includes(a.charCodeAt(0))}
            >
              {a}
            </button>
          );
        })}
      </div>
      <div>
        {alphabets_row2.map((a) => {
          return (
            <button
              className="btn"
              value={a.charCodeAt(0)}
              onClick={() => handleGuessChar(a.charCodeAt(0))}
              disabled={guessedChar.includes(a.charCodeAt(0))}
            >
              {a}
            </button>
          );
        })}
      </div>
      <div>
        {alphabets_row3.map((a) => {
          return (
            <button
              className="btn"
              value={a.charCodeAt(0)}
              onClick={() => handleGuessChar(a.charCodeAt(0))}
              disabled={guessedChar.includes(a.charCodeAt(0))}
            >
              {a}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Reset = ({
  setWord,
  setCorrectGuess,
  setGuessedChar,
  setNoOfWrongGuess,
  children,
}) => {
  function handleResetGame() {
    const randomWord =
      randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase();
    const words = [];
    for (let i = 0; i < randomWord.length; i++) {
      words.push(randomWord.charAt(i));
    }
    setWord((s) => words);
    setCorrectGuess((g) => []);
    setGuessedChar((g) => []);
    setNoOfWrongGuess((n) => 0);
  }
  return (
    <button className="reset" onClick={handleResetGame}>
      {children}
    </button>
  );
};

const Won = () => {
  return <div>WON</div>;
};

const Lost = () => {
  return <div className="lost">Ooops... You Lost!</div>
}

const Popover = ({ children }) => {
  return <div className="popover">
    <div>
      {children}
    </div>
  </div>
}

function App() {
  const randomWord = "HELLO";
  const words = [];
  for (let i = 0; i < randomWord.length; i++) {
    words.push(randomWord.charAt(i));
  }

  const [word, setWord] = useState(words);
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
        noOfWrongGuess >= 1 &&
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
