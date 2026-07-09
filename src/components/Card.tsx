import "../styles/Card.css";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

function Card({
  title,
  description,
  buttonText,
  onClick,
}: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{description}</p>

      <button onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default Card;