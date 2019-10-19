import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div>{renderList}</div>;
};

export default VideoList;
