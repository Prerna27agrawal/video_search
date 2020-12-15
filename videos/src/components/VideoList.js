import React from 'react';
import VideoItem from './VideoItem';
 
// in place of props we have used videos so we can write videos in place of props.videos
 const VideoList = ({videos})=>{
    //  props.videos
    const renderedList = videos.map((video)=>{
        return <VideoItem video ={video} />
    });
     return <div className="ui relaxed divided list">{renderedList}</div>
 };

 export default VideoList;