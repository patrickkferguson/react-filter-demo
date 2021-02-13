import React from 'react';
import Search from './Components/Search';
import Results from './Components/Results'

class App extends React.Component {

  render () {

    const results = {
      data: [
        {
          title: "Uluru-Kata Tjuta National Park",
          img: "https://picsum.photos/800/2700",
          location: "Uluru NT"
        },
        {
          title: "Royal National Park",
          img: "https://picsum.photos/400/400",
          location: "Royal National Park NSW"
        },
        {
          title: "Kosciuszko National Park",
          img: "https://picsum.photos/320/720",
          location: "NSW"
        },
        {
          title: "Booderee National Park",
          img: "https://picsum.photos/160/180",
          location: "Jervis Bay JBT"
        }   
      ]
    };

    return (
      <div className="App">
        <Search />
        <Results popular={results.data} featured={results.data} />
      </div>
    );
  }
}

export default App;
