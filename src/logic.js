
const isEven = (matches) => matches % 2 === 0;

const minimax = (remainingMatches, isComputerTurn, computerMatches, playerMatches) => {
    if (remainingMatches === 0) {
        
        if (isEven(computerMatches)) return 1;
        if (isEven(playerMatches)) return -1;
        return 0; 
    }

    if (isComputerTurn) {
        let bestScore = -Infinity;
        for (let i = 1; i <= 3; i++) {
            if (remainingMatches - i >= 0) {
                computerMatches += i;
                let score = minimax(remainingMatches - i, false);
                bestScore = Math.max(bestScore, score);
                computerMatches -= i;
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 1; i <= 3; i++) {
            if (remainingMatches - i >= 0) {
                playerMatches += i;
                let score = minimax(remainingMatches - i, true);
                bestScore = Math.min(bestScore, score);
                playerMatches -= i;
            }
        }
        return bestScore;
    }
};

const computerMove = (remainingMatches, computerMatches, playerMatches) => {
    let bestMove = -1;
    let bestScore = -Infinity;
    
    for (let i = 1; i <= 3; i++) {
        if (remainingMatches - i >= 0) {
            computerMatches += i;
            let score = minimax(remainingMatches - i, false, computerMatches, playerMatches);
            computerMatches -= i;
            
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    
    return bestMove;
};

export { computerMove }
