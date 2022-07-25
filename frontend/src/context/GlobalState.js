import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

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

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToLibrary = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIBRARY", payload: movie });
  };

  const removeFromLibrary = (id) => {
    dispatch({ type: "REMOVE_FROM_LIBRARY", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watched: state.watched,
        addMovieToLibrary,
        removeFromLibrary,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );

};