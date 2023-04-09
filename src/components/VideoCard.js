import React from 'react';

const VideoCard = ( {info}) => {
  
 
    const{snippet,statistics    }=info
    const{channelTitle,
        title ,thumbnails   }=snippet
  return (
    <div>
      <img alt='video' src={thumbnails.high.url}/>
      <ul>
      <li>{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount}</li>
      </ul>
      
      <h1>hey</h1>
    </div>
  );
}

export default VideoCard;
