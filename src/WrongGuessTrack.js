
const WrongGuessTrack = ({ noOfWrongGuess }) => {
    return (
        <div className="track-wrong-guess">
            <span>{noOfWrongGuess}/6</span>
        </div>
    );
};

export default WrongGuessTrack;