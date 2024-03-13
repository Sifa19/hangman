
const Keyboard = ({
    word,
    guessedChar,
    setGuessedChar,
    setNoOfWrongGuess,
    setCorrectGuess,
}) => {

    function handleGuessChar(val) {
        setGuessedChar((g) => [...g, val]);

        const isVowel = ["A", "E", "I", "O", "U"].includes(val);
        const correctGuess = word.includes(val);
        if (correctGuess) setCorrectGuess((w) => [...w, val]);
        if (!isVowel && !correctGuess) setNoOfWrongGuess((s) => s + 1);
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
                            onClick={() => handleGuessChar(a)}
                            disabled={guessedChar.includes(a)}
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
                            onClick={() => handleGuessChar(a)}
                            disabled={guessedChar.includes(a)}
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
                            onClick={() => handleGuessChar(a)}
                            disabled={guessedChar.includes(a)}
                        >
                            {a}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Keyboard;