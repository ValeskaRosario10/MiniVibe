import React from 'react'
import Feed from '../feed/feed'
import Favourites from '../favourites/favourites'
import Library from '../library/library'
import Player from '../player/player'
import Trending from '../trending/trending'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './home.css';
import Sidebar from '../../component/sidebar'

export default function Home() {
  return (
    
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
