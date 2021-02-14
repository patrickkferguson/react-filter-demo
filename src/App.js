import React, { useState, useEffect } from 'react';
import Search from './Components/Search';
import Results from './Components/Results';

const apiBaseUrl = 'http://demo3136867.mockable.io/';

function App() {

  const [popularAttractions, setPopularAttractions] = useState([]);
  const [featuredAttractions, setFeaturedAttractions] = useState([]);

  async function fetchPopularAttractions() {
    const response = await fetch(apiBaseUrl + 'carousel');
    const json = await response.json();
    setPopularAttractions(json.data);
  }

  async function fetchFeaturedAttractions() {
    const response = await fetch(apiBaseUrl + 'featured');
    const json = await response.json();
    setFeaturedAttractions(json.data);
  }

  useEffect(() => {
    fetchPopularAttractions();
    fetchFeaturedAttractions();
  }, []);

  return (
    <div className="App">
      <Search />
      <Results popular={popularAttractions} featured={featuredAttractions} />
    </div>
  );
}

export default App;
