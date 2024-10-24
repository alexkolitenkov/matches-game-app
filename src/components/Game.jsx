import { useState } from 'react';
import '../assets/css/game.css';
import { Menu } from './Menu.jsx';
import { Matches } from './Matches.jsx';
import { ScoreBoard } from './ScoreBoard.jsx';
import { Intro } from './Intro.jsx';
import { computerMove } from '../logic.js';
import { GameOver } from './GameOver.jsx'

export const Game = () => {
    const [matches, setMatches] = useState(25);
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [winner, setWinner] = useState(null);

    const handleUserMove = (matchesToTake) => {
        if (matchesToTake > matches) return;
        const newMatchCount = matches - matchesToTake;
        const newUserScore = userScore + matchesToTake;
        setMatches(newMatchCount);
        setUserScore(newUserScore);

        if (newMatchCount <= 0) {
            setIsGameOver(true);
            setWinner(newUserScore % 2 === 0 ? 'user' : 'computer');
        } else {
            handleComputerMove(newMatchCount);
        }
    };

    const handleComputerMove = (matchesLeft) => {
        const computerMoveCount = computerMove(matchesLeft, computerScore, userScore);
        const newMatchCount = matchesLeft - computerMoveCount;
        const newComputerScore = computerScore + computerMoveCount;
        setMatches(newMatchCount);
        setComputerScore(newComputerScore);

        if (newMatchCount <= 0) {
            setIsGameOver(true);
            setWinner(newComputerScore % 2 === 0 ? 'computer' : 'user');
        }
    };

    const restartGame = () => {
        setMatches(25);
        setUserScore(0);
        setComputerScore(0);
        setIsGameOver(false);
        setWinner(null);
    };

    return (
        <>
            <Intro />
            <Matches n={matches} />
            <Menu onUserMove={handleUserMove} />
            <ScoreBoard userScore={userScore} computerScore={computerScore} />
            {isGameOver && <GameOver winner={winner} onRestart={restartGame} />}
        </>
    );
};
