
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import PhotoHolder from "./Pages/PhotoHolder";

export default function SharePhoto({socket}) {
  const navigate =useNavigate();
  const [photos,setPhotos]=useState([])
  const {user}=useParams()
  return (
    <div>
<Navbar/>
<PhotoHolder socket={socket} photos={photos}/>




    </div>
  )
}
