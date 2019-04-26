import React from 'react';

export default function ScreenVideo({source, style}) {
  const type = 'video/' + source.split('.').pop();

  return (
    <video
      autoPlay
      disableremoteplayback="true"
      loop
      muted
      playsInline
      preload="auto"
      style={style}
    >
      <source src={source} type={type} />
      {"Sorry, your browser doesn't support embedded videos."}
    </video>
  );
}
