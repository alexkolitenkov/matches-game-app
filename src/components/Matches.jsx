import '../assets/css/matches.css'
import { Match } from "./Match";

export const Matches = ({ n }) => {
    let arrOfMatches = new Array(n);
    for (let i = 0; i < n; ++i) {
        arrOfMatches[i] = <Match key={i} />;
    }

    return (
        <div className='matches'>
            {arrOfMatches.map(el => (
                <div className="match">{el}</div>
            ))}
        </div>
    )
}