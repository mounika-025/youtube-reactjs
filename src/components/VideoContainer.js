import React, { useEffect, useState } from 'react';
import { VIDEO_API } from './constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

    const [videos,setVideos]=useState([])
    useEffect(()=>{
        getVideos();
    },[]);

    const getVideos=async()=>{
        const data= await fetch(VIDEO_API);
        const json=await data.json();
        console.log(json)
        setVideos(json.items)
    };
  return (
    <div>
      {videos?.items?.map(video=>
        <VideoCard key={video.id} info={video}/>
      )}
    </div>
  );
}

export default VideoContainer;
