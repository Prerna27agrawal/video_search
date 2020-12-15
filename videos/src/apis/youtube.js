import axios from 'axios';

const KEY="AIzaSyAU9g7q_JjcJFC9Yv3zL23qJgqwFlS2RZg";

export default axios.create({
   baseURL:'https://www.googleapis.com/youtube/v3',
   params:{
       part:'snippet',
       maxResults:5,
       type:'video',
       key:KEY
   } 
});