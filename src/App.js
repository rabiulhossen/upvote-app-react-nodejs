import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { io } from "socket.io-client";

import './App.css';
import Login from "./Pages/Login";
import MyPhotos from "./Pages/MyPhotos";
import Navbar from "./Pages/Navbar";
import PhotoHolder from "./Pages/PhotoHolder";
import Photos from "./Pages/Photos";
import Register from "./Pages/Register";
import UploadPhotos from "./Pages/UploadPhotos";
import SharePhoto from "./SharePhoto";


//👇🏻 http://localhost:4000 is where the server host URL.

function App() {
  const socket = io.connect("http://localhost:5000");
  return (
    <>
 
<BrowserRouter>
<Navbar/>

<Routes>

<Route path="/photos" element={<Photos/>}/>
<Route path="/" element={<Login socket={socket} />}/>
<Route path="/register" element={<Register socket={socket}/>}/>
<Route path="/photo/upload" element={<UploadPhotos socket={socket}/>}/>
 <Route path="/user/photos" element={<MyPhotos socket={socket}/>}/> 
 <Route path='/share/:user' element={<SharePhoto socket={socket} />} />
</Routes>
</BrowserRouter>
<ToastContainer/>
    </>
  );
}

export default App;
