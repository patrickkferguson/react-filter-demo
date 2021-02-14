import Card from './Card';
import './CardList.css';

function CardList(props) {

  const { data, imageStyle } = props;

  const cards = data.map((cardData, _) => <Card key={cardData.title} data={cardData} imageStyle={imageStyle} />);

  return (
    <div className="CardList">
      {cards}
    </div>
  );
}

export default CardList;