import React from 'react';
import '../scss/VideoItem.scss';

const VideoItem = ({ video, onViedoSelected }) => {
  return (
    <div className="video-item item" onClick={() => onViedoSelected(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
