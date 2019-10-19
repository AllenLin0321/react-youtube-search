import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onViedoSelected }) => {
  const renderList = videos.map(video => {
    return (
      <VideoItem video={video} onViedoSelected={onViedoSelected} key={video.id.videoId} />
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
