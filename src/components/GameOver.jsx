import '../assets/css/gameover.css';

export const GameOver = ({ winner, onRestart }) => {
    return (
        <div className="game-over-overlay">
            <div className="game-over-modal">
                <h2>{winner === 'user' ? 'You Win!' : 'Computer Wins!'}</h2>
                <button onClick={onRestart} className="restart-button">Restart Game</button>
            </div>
        </div>
    );
};
