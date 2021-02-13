import CardList from "./CardList";
import './Carousel.css';

function Carousel(props) {
  return (
    <div className="Carousel">
      <div className="cardContainer">
        <CardList data={props.data} />
        </div>
    </div>
  );
}

export default Carousel;