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
import apiClient from '../../spotify';


export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
// export default function Sidebar() {
//   const [image ,setImage]=useState(
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s"
//   );
//   useEffect(() =>{
//     apiClient.get("me").then(response => {
//       setImage(response.data.images[0].url);});

//   } );
  // const [image, setImage] = useState(
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  // );
  // useEffect(() => {
  //   apiClient.get("me").then((response) => {
  //     setImage(response.data.images[0].url);
  //   });
  // }, []);
  return (
    <div className='sidebar-container'>
      <img src={image}
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
