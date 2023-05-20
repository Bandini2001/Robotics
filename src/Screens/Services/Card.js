import './Card1.css';
import './Card.js';

function Card({title, description}) {
  return (
    <div className="card">
        <h2>{}</h2>
        <h2>{title}</h2>

        <p>{description}</p>
    </div>
  )
}

export default Card;