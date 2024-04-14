import React from "react";

function VideoFrame({url}) {
  return (
    <div>
      <iframe className="w-full aspect-video" src={url} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

export default VideoFrame;