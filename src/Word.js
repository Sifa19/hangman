const Word = ({ word, correctGuess }) => {
    console.log(correctGuess);
    return (
        <div className="word-conatiner">
            <div className="word">
                {word.map((ch, i) => {
                    if (ch.charCodeAt(0) === 32)
                        return <span className="space"></span>;
                    return (
                        <div
                            className={`${correctGuess.includes(ch) ? "" : "hide"}`}
                        >
                            {ch}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Word;