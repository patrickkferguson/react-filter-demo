import React, { useState, useEffect } from 'react';
import Search from './Components/Search';
import Results from './Components/Results';

const apiBaseUrl = 'http://demo3136867.mockable.io/';

function App() {

  const [popularAttractions, setPopularAttractions] = useState([]);
  const [featuredAttractions, setFeaturedAttractions] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filteredAttractions, setFilteredAttractions] = useState([]);

  async function fetchPopularAttractions() {
    const response = await fetch(apiBaseUrl + 'carousel');
    const json = await response.json();
    setPopularAttractions(json.data);
    filterPopularAttractions(json.data);
  }

  async function fetchFeaturedAttractions() {
    const response = await fetch(apiBaseUrl + 'featured');
    const json = await response.json();
    setFeaturedAttractions(json.data);
  }

  function filterPopularAttractions(attractions) {    
    if (filterText && filterText !== '' && attractions.length > 0) {
      const filteredAttractions = attractions.filter(item => item.title.toLowerCase().includes(filterText.toLowerCase()));
      setFilteredAttractions(filteredAttractions);
    } else {
      setFilteredAttractions(attractions);
    }
  }

  useEffect(() => {
    if (popularAttractions.length === 0) {
      fetchPopularAttractions();
    }

    if (featuredAttractions.length === 0) {
      fetchFeaturedAttractions();
    }

    filterPopularAttractions(popularAttractions);
  }, [filterText]);

  return (
    <div className="App">
      <Search onChange={event => setFilterText(event.target.value)}/>
      <Results popular={filteredAttractions} featured={featuredAttractions} />
    </div>
  );
}

export default App;
