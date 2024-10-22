// import "bootstrap/dist/css/bootstrap.min.css";
// import {Container,InputGroup,FormControl,Button,Row ,Card } from 'react-bootstrap'
// import { useEffect } from "react";

// const ClientID= "b5736d82a353412cafecb8fcff94d8fd" ;
// const ClientSecret= "4dea0912b7334c5bba14164d3a612c73" ;


// import React, { useEffect, useState } from 'react'
// export default function Search() {
//     const [searchInput, setSearchInput] =useState("") ;

//     useEffect(()=>{

//     },[])



//   return (
//     <div className='screen-container'>Players 
//    <Container>
//     <InputGroup className="mb-3" size="lg">
//         <FormControl 
//         placeholder="Search for artiest"
//         type="input"
//         onKeyPress={event=>{
//             if(event.key=== "Enter"){
//                 console.log("Pressed Enter ");
//             }
//         }}
//         onChange={event=> setSearchInput (event.target.value)}
//         />
//         <Button onClick={event => {console.log("Clicked button")}}> Search</Button>
//      </InputGroup>
//    </Container>
//    <Container>
//     <Row className="mx-2 row-cols-4">
//       <Card>
//           <Card.Img  src="#"/>
//         < Card.Body>
//         <Card.Title> Album name </Card.Title>
//         </Card.Body>
//       </Card>
//     </Row>
    
//    </Container>
//     </div>
//   )
// }
import APIKit from "../../spotify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import apiClient from "../../spotify"; // Import the apiClient from your spotify.js

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);

  // Function to handle the search request
  const handleSearch = () => {
    if (searchInput.length > 0) {
      // Spotify API request to search for albums
      apiClient
        .get(`search?q=${searchInput}&type=album`)
        .then(response => {
          setAlbums(response.data.albums.items); // Update albums with the search results
          console.log(response.data.albums.items);
        })
        .catch(error => {
          console.error("Error fetching search results", error);
        });
    }
  };

  return (
    <div className='screen-container'>
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for artist"
            type="input"
            onKeyPress={event => {
              if (event.key === "Enter") {
                handleSearch(); // Trigger search on Enter
              }
            }}
            onChange={event => setSearchInput(event.target.value)} // Update input state
          />
          <Button onClick={handleSearch}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row-cols-4">
          {albums.map((album, index) => (
            <Card key={index} className="mb-3">
              <Card.Img variant="top" src={album.images[0]?.url} alt={album.name} />
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <Card.Text>By {album.artists[0].name}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}
