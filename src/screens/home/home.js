import React, { useEffect ,useState } from 'react'
import Feed from '../feed/feed'
import Favourites from '../favourites/favourites'
import Library from '../library/library'
import Player from '../player/player'
import Trending from '../trending/trending'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './home.css';
import Sidebar from '../../component/sidebar'
import Login from "../auth/login"
import { setClientToken } from '../../spotify'

// export default function Home() {
//   const [token, setToken] = useState("");
//   useEffect(()=>{
//     const _token =window.localStorage.getItem("token");
//     const hash = window.location.hash;
//     window.location.hash="";
//     if (!token && hash){
//       const _token=hash.split("&")[0].split('=')[1];
//       window.localStorage.setItem("token",_token);
//       setToken(_token);
//       setClientToken(_token);
//     }else {
//       setToken(_token);
//       setClientToken(token);
//     }

//   } );



export default function Home() {
  const [token, setToken] = useState("");
  useEffect(()=>{
    const _token =window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash="";
    if (!token && hash){
      const _token=hash.split("&")[0].split('=')[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
      setClientToken(_token);
    }else {
      setToken(token);
      setClientToken(token);
    }

  } );


  return  token ? (
    <Login/> ) 
    : (
        <Router>
    <div className='main-body'>
     
      <Sidebar/>
      <Routes>
        <Route path ="/"  element={<Library/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/player" element={<Player/>}/>
      </Routes>
      </div>
    </Router> 
  
  )
}
