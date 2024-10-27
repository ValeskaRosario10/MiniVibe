import React, { useContext, useEffect } from "react";
import { MusicContext } from "../Context";
import "./card.css"; // Add your CSS here

function Card({ element }) {
  const musicContext = useContext(MusicContext);
  const likedMusic = musicContext.likedMusic;
  const setLikedMusic = musicContext.setLikedMusic;
  const pinnedMusic = musicContext.pinnedMusic;
  const setPinnedMusic = musicContext.setPinnedMusic;

  const handlePin = () => {
    let pinnedMusic = localStorage.getItem("pinnedMusic");
    pinnedMusic = JSON.parse(pinnedMusic) || [];
    let updatedPinnedMusic = [];

    if (pinnedMusic.some((item) => item.id === element.id)) {
      updatedPinnedMusic = pinnedMusic.filter((item) => item.id !== element.id);
      setPinnedMusic(updatedPinnedMusic);
      localStorage.setItem("pinnedMusic", JSON.stringify(updatedPinnedMusic));
    } else {
      if (pinnedMusic.length >= 4) {
        pinnedMusic.shift(); // Remove the first pinned item if 4 are already pinned
      }
      updatedPinnedMusic = [...pinnedMusic, element];
      setPinnedMusic(updatedPinnedMusic);
      localStorage.setItem("pinnedMusic", JSON.stringify(updatedPinnedMusic));
    }
  };

  const handleLike = () => {
    let likedMusic = localStorage.getItem("likedMusic");
    likedMusic = JSON.parse(likedMusic) || [];
    let updatedLikedMusic = [];

    if (likedMusic.some((item) => item.id === element.id)) {
      updatedLikedMusic = likedMusic.filter((item) => item.id !== element.id);
      setLikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    } else {
      updatedLikedMusic = [...likedMusic, element];
      setLikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    }
  };

  useEffect(() => {
    const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic"));
    if (localLikedMusic) {
      setLikedMusic(localLikedMusic);
    }
  }, [setLikedMusic]);

  return (
    <div key={element.id} className="col-lg-3 col-md-6 py-2">
      <div className="card dark-card">
        <div className="ratio ratio-1x1 dark-card-img">
          <img
            src={element.album.images[0].url}
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between text-light">
            {element.name}
            <div className="add-options d-flex align-items-start">
              {pinnedMusic.some((item) => item.id === element.id) ? (
                <button onClick={handlePin} className="btn btn-outline-light mx-1">
                  <i className="bi bi-pin-angle-fill"></i>
                </button>
              ) : (
                <button onClick={handlePin} className="btn btn-outline-light mx-1">
                  <i className="bi bi-pin-angle"></i>
                </button>
              )}
              {likedMusic.some((item) => item.id === element.id) ? (
                <button onClick={handleLike} className="btn btn-outline-light">
                  <i className="bi bi-heart-fill text-danger"></i>
                </button>
              ) : (
                <button onClick={handleLike} className="btn btn-outline-light">
                  <i className="bi bi-heart"></i>
                </button>
              )}
            </div>
          </h5>
          <p className="card-text text-light">Artist: {element.album.artists[0].name}</p>
          <p className="card-text text-light">
            Release date: {element.album.release_date}
          </p>
          <audio src={element.preview_url} controls className="w-100"></audio>
        </div>
      </div>
    </div>
  );
}

export default Card;
