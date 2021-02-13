import Card from './Card';
import './CardList.css';

function CardList(props) {

  const { data } = props;

  const cards = data.map((cardData, _) => <Card data={cardData} />);

  return (
    <div className="CardList">
      {cards}
    </div>
  );
}

export default CardList;