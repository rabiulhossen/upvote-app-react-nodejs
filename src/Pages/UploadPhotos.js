import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UploadPhotos({ socket }) {
   const [photoUrl, setPhotoUrl] = useState('');
   const navigator = useNavigate();
   const uploadPhoto = (e) => {
      e.preventDefault();
      console.log(photoUrl);
   };

   return (
      <div className="uploadContainer">
         <div className="uploadText">
            <h2>Upload Photo</h2>
            <form onSubmit={uploadPhoto} method="POST">
               <label htmlFor="url">paste the image url</label>
               <input
                  type="text"
                  value={photoUrl}
                  id="url"
                  placeholder="Enter Photo URL"
                  onChange={(e) => setPhotoUrl(e.target.value)}
               />

               <button type="submit">Upload</button>
            </form>
         </div>
      </div>
   );
}
