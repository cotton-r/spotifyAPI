import './App.css';
import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {name: 'Gone', artist: 'Kanye West', album: 'Late Registration', id: 1},
        {name: 'Forever ever', artist: 'Trippie Redd', album: 'Topanga', id: 2},
        {name: 'Juice', artist: 'Chance the Rapper', album: 'Acid Rap', id: 3}
      ],
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
