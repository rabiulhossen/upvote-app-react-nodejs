import React from 'react';
import { BiUpvote } from 'react-icons/bi';

export default function PhotoHolder({ photos, socket }) {
     const {id, image_url,vote_count} = photos;
   const handleUpvote = (id) => {
      console.log('Upvote count', id);
   };
console.log(photos , "hello")
   return (
      <div className="photoHolder">
         {photos.map((photo) => {
                     console.log(photo.vote_count , "photo is overlapping")
           const {id, image_url,vote_count} = photo;

            <div className="photo" key={id}>
               <div className="imagesAll">
                  <img src={image_url} alt={id} className="everyImage" />
               </div>
               <button
                  className="upvoteIcon"
                  onClick={() => handleUpvote(id)}
               >
                  {' '}
                  <BiUpvote />
                  <p style={{ fontSize: '12px', color: '#ce7777' }}>
                     {vote_count}
                  </p>
               </button>
            </div>;
         })}
      </div>
   );
}
