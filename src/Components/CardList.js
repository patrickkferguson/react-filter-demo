import Card from './Card';
import './CardList.css';

function CardList(props) {

  const { data, imageStyle } = props;

  const cards = data.map(cardData => <Card key={cardData.title} data={cardData} imageStyle={imageStyle} />);
  const noResults = <div className="noResults">No matching results</div>;

  return (
    <div className="CardList">
      {
        cards.length == 0 ? noResults : cards
      }
    </div>
  );
}

export default CardList;