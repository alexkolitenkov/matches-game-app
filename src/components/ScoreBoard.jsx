import '../assets/css/scoreBoard.css';
import { FaRegUser } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

export const ScoreBoard = ({ userScore, computerScore }) => {
    return (
        <div className='scoreBoard'>
            <h2 className='scoreBoardTitle'>Score Board</h2>
            <div className='scoreBoardSection'> 
                <div className='score user'>
                    <FaRegUser className='icon' />
                    <p>{userScore}</p>
                </div>
                <div className='score computer'>
                    <RiComputerLine className='icon' />
                    <p>{computerScore}</p>
                </div>
            </div>
        </div>
    );
};