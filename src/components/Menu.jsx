import '../assets/css/menu.css';
import { Button } from "./Button";

export const Menu = ({ onUserMove }) => {
    return (
        <div className='menu'>
            <Button label="Take 1 Match" onClick={() => onUserMove(1)} />
            <Button label="Take 2 Matches" onClick={() => onUserMove(2)} />
            <Button label="Take 3 Matches" onClick={() => onUserMove(3)} />
        </div>
    );
};
