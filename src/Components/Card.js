import './Card.css'

function Card(props) {

  const { img, title, location} = props.data;

  return (
    <div className="Card">
      <img className="image" src={img} />
      <div className="details">
        <div className="title">{title}</div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
}

export default Card;