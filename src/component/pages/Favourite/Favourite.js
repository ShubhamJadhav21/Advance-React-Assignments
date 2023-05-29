import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Favourite.module.css";

import { removeFromFavorites } from "../../../redux/FavouriteSlice";

const Favourite = () => {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favorites && favorites.length !== 0 ? (
        favorites.map((movie) => (
          <div key={movie.imdbID}>
            <div>{movie.Title}</div>
            <div>{movie.Year}</div>
            <img src={movie.Poster} alt={movie.Title} />
            <button onClick={() => handleRemoveFromFavorites(movie)}>
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        <p>No favorite movies selected.</p>
      )}
    </div>
  );
};

export default Favourite;
