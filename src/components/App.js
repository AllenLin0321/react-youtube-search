import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onFormSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: res.data.items });
  };

  onViedoSelected = video => {
    console.log('video: ', video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList videos={this.state.videos} onViedoSelected={this.onViedoSelected} />
      </div>
    );
  }
}

export default App;
