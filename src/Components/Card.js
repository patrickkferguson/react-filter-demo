import './Card.css'

function Card(props) {

  const { img, title, location } = props.data;
  const { imageStyle } = props;
  const cardStyle = 'Card ' + imageStyle;
  const imageContinerStyle = 'imageContainer ' + imageStyle;
  
  return (
    <div className={cardStyle}>
      <div className={imageContinerStyle}>
        <img className="image" src={img} />
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
}

export default Card;