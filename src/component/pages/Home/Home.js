import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Atom/Button/Button";
import style from "./Home.module.css";

import { fetchMovies } from "../../../redux/FetchMovies";
import { addToFavorites } from "../../../redux/FavouriteSlice";

export default function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  
  function handleFavorite(movies) {
    dispatch(addToFavorites(movies));
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <p className={style.heading}>Movies</p>
      <div className={style.wrapper}>
        <div className={style.card}>
          {movies.map((movie) => (
            <div key={movie.title} className={style.movieList}>
              <img src={movie.Poster} alt="Not Found" />
              <p>{movie.Title}</p>
              <p> {movie.Year}</p>
              <p>{movie.imdbID}</p>
              <Button
                text="Add to Favorite"
                onClick={() => handleFavorite(movies)}
                style={style.btn}
              />
            </div>
          ))}
        </div>
      </div>
          
    </>
  );
}
