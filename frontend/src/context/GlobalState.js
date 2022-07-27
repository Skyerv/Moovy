import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";
import { backendClient } from '../api-clients'

// initial state
const initialState = {
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(state)

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state])

  // actions
  const addMovieToLibrary = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIBRARY", payload: movie });
    
    let reqOptionsPost = {
      url: `/movies/create/`,
      method: "POST",
      data: {
        "imdb_id": movie.imdbID,
        "title": movie.Title,
        "year": movie.Year,
        "poster": movie.Poster,
        "rating": "Unknwown",
        "audioreview": "empty"
      },
    }

    backendClient.request(reqOptionsPost).then(function (response) {
    });
  };

  const getMoviesFromLibrary = () => {
    const [moviesArr, setMoviesArr] = useState([]);
    
    let reqOptionsPost = {
      url: `/movies/`,
      method: "GET",
    }

    backendClient.request(reqOptionsPost).then(function (response) {
      setMoviesArr(response.data);
    }); 

    return moviesArr;
  };


  const removeFromLibrary = (imbd_id) => {
    dispatch({ type: "REMOVE_FROM_LIBRARY", payload: imbd_id });

    let reqOptionsPost = {
      url: `/movies/${imbd_id}`,
      method: "DELETE",
    }

    backendClient.request(reqOptionsPost).then(function (response) {
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        watched: state.watched,
        addMovieToLibrary,
        removeFromLibrary,
        getMoviesFromLibrary,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );

};