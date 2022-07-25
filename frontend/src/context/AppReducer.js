export default (state, action) => {
    switch (action.type) {

      case "ADD_MOVIE_TO_LIBRARY":
        return {
            ...state,
            watched: [action.payload, ...state.watched],
            
          };

      case "REMOVE_FROM_LIBRARY":
        return {
          ...state,
          watched: state.watched.filter((movie) => movie.imdbID !== action.payload),
        };
      default:
        return state;
    }
  };