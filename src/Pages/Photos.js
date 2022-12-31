import React,{ useEffect, useState } from 'react'
import Navbar from './Navbar';
import PhotoHolder from './PhotoHolder';

export default function Photos({socket}) {
  
const [photos, setPhotos] = useState([
      {
         id: '1',
         image_url:
            'https://raw.githubusercontent.com/novuhq/blog/main/upvote-app-with-react-and-nodejs/server/images/dog1.jpg',
         vote_count: 0,
      },
      {
         id: '2',
         image_url:
            'https://raw.githubusercontent.com/novuhq/blog/main/upvote-app-with-react-and-nodejs/server/images/dog2.jpg',
         vote_count: 0,
      },
   ]);

   return (
      <div>
         <Navbar />
         <PhotoHolder photos={photos} socket={socket} />
      </div>
   );



 
}
