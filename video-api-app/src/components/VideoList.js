import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //here we will use props.videos
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        Key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList} </div>;
};
export default VideoList;
