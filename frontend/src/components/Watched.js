import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard';
import { ResultCard2 } from './ResultCard2';
import { TopButton } from './TopButton';

export const Watched = () => {
  const {watched} = useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);

  return (
    <div className="lib-container">
      <div className='space'>
        <p>aaa</p>
      </div>
      <div className='search-header' id='lib-header'>
          <h1>My Library</h1>
      </div>

      <div className="content">
        {watched.length > 0 ? (
          <div className="movie-page">
            <div className='container'>
              <div className="movie-grid2">
                {watched.map((movie) => (
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
