import randomWords from "./data";

const Reset = ({
    setWord,
    setCorrectGuess,
    setGuessedChar,
    setNoOfWrongGuess,
    children,
}) => {
    function handleResetGame() {
        const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)].toUpperCase();
        setWord((s) => randomWord.split(""));
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

export default Reset;