import '../assets/css/button.css'

export const Button = ({ label, onClick, style }) => {
    return (
      <button className="button" onClick={onClick} style={style}>
        {label}
      </button>
    );
  };