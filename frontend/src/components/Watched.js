import React, {useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard';
import { TopButton } from './TopButton';

export const Watched = () => {
  console.log('oi')
  const { getMoviesFromLibrary } = useContext(GlobalContext);
  let moviesArr = getMoviesFromLibrary();

  return (
    
    <div className="lib-container">
      <div className='space'>
        <p>aaa</p>
      </div>
      <div className='search-header' id='lib-header'>
          <h1>My Library</h1>
      </div>

      <div className="content">
        {moviesArr.length > 0 ? (
          <div className="movie-page">
            <div className='container'>
              <div className="movie-grid2">
                  {moviesArr.map((movie) => (
                    <MovieCard movie={movie} />
                  ))}
              </div>
            </div>
          </div>
      ) : (
        <div className="find-container">
            <div className="empty2">
              <img src="assets/search_icon.png" alt="" />
              <p>Looks like your library is empty! Try going to the "Search" guide and looking for some movies! </p>
            </div>
          </div>
      ) } 
      </div>
      <TopButton />
    </div>

  )
}
