import React from 'react';
import { BiUpvote } from 'react-icons/bi';

export default function PhotoHolder({ photos, socket }) {
   const handleUpvote = (id) => {
      console.log('Upvote count', id);
   };
   console.log(photos, 'hello');
   return (
      <div className="photoHolder">
         {photos.map((photo) => {
            return (
               <div key={photo.id} className="photo">
                  <div className="imagesAll">
                     <img
                        src={photo.image_url}
                        alt={photo.id}
                        className="everyImage"
                     />
                  </div>
                  <button
                     className="upvoteIcon"
                     onClick={() => handleUpvote(photo.id)}
                  >
                     {' '}
                     <BiUpvote />
                     <p style={{ fontSize: '12px', color: '#ce7777' }}>
                        {photo.vote_count}
                     </p>
                  </button>
               </div>
            );
         })}
      </div>
   );
}
