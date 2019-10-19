import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit('React javascript');
  }

  onFormSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  onViedoSelected = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onViedoSelected={this.onViedoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
