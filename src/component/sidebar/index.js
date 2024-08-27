import React ,{useState,useEffect } from 'react';
import "./sidebar.css";
import { Link , useLocation} from "react-router-dom";
import SidebarButton  from './sidebarButton';
import { MdDynamicFeed } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
      className="profile-img" alt="Profile" />
    
    <div >
      <SidebarButton title="feed" to="./feed" icon={<MdDynamicFeed />}/>
      <SidebarButton title="trending" to="./trending" icon={<FiTrendingUp />}/>
      <SidebarButton title="player" to="./player" icon={<TbPlayerPlayFilled />}/>
      <SidebarButton title="favourites" to="./favourites" icon={<FaHeartbeat />}/>
      <SidebarButton title="library" to="./library" icon={<MdLibraryMusic />}/>

      
    </div>
    <div>
    <SidebarButton title="logout" to="./library" icon={<RiLogoutBoxLine />}/>

    </div>
    
    
    </div>
  )
}
