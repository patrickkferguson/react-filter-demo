import Search from "./Search";

import './Results.css';
import Carousel from "./Carousel";
import CardList from "./CardList";

function Results(props) {
  return (
    <div className="Results">
      <div className="sectionHeading">Popular around you</div>
      <Carousel data={props.popular} />
      <div className="sectionHeading">Featured</div>
      <CardList data={props.featured} />
    </div>
  );
}

export default Results;