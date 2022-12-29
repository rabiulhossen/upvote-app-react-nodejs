import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { io } from "socket.io-client";

import './App.css';
import Login from "./Pages/Login";
import MyPhotos from "./Pages/MyPhotos";
import Photos from "./Pages/Photos";
import Register from "./Pages/Register";


//👇🏻 http://localhost:4000 is where the server host URL.

function App() {
  const socket = io.connect("http://localhost:5000");
  return (
    <>
<Routes>
<Route path="/photos" element={<Photos socket={socket}/>}/>
<Route path="/myphotos" element={<MyPhotos socket={socket}/>}/>
<Route path="/" element={<Login socket={socket} />}/>
<Route path="/register" element={<Register socket={socket}/>}/>

</Routes>
<ToastContainer/>
    </>
  );
}

export default App;
