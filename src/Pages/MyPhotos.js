import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PhotoHolder from './PhotoHolder';

export default function MyPhotos({ socket }) {
   const navigate = useNavigate();
   const [photos, setPhotos] = useState([]);
   const [userLink, setUserLink] = useState('');
  

   //👇🏻 This function runs immediately the content is copied
   const copyToClipBoard = () => {alert(`Copied ✅`); console.log(userLink,'what?')}
   return (
      <div>
         <div>
            <nav className="navbar">
               <h3>PhotoShare</h3>

               <div className="nav__BtnGroup">
                  <Link to="/photo/upload">Upload Photo</Link>
                  <button>Sign out</button>
               </div>
            </nav>

            <div className="copyDiv">
               <CopyToClipboard
                  text={userLink}
                  onCopy={copyToClipBoard}
                  className="copyContainer"
               >
                  <span className="shareLink">Copy your share link</span>
               </CopyToClipboard>
            </div>

            <PhotoHolder socket={socket} photos={photos} />
         </div>
      </div>
   );
}
