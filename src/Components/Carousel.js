import CardList from "./CardList";
import './Carousel.css';

function Carousel(props) {
  return (
    <div className="Carousel">
      <div className="cardContainer">
        <CardList data={props.data} imageStyle="landscape" />
      </div>
      <button className="scrollLeft">&lt;</button>
      <button className="scrollRight">&gt;</button>
    </div>
  );
}

export default Carousel;