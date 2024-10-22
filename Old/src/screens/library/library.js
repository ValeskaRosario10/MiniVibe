import React from 'react';
import APIKit from "../../spotify";
// import '../globalstyle.css' ;

export default function Library() {

  APIKit.get('me/playlists').then(function(response){
    console.log(response.data);
  })


  return (
    <div className='screen-container'>Library</div>
  )
}
