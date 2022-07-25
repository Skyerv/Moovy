import React from 'react'

export const Watched = () => {
  let moviesArr = [];

  return (
    <div className="lib-container">
      <div className='search-header' id='lib-header'>
          <h1>My Library</h1>
      </div>

      <div className="content">
        {moviesArr.length > 0 ? (
      console.log('oi')
      ) : (
        <div className="find-container">
            <div className="empty2">
              <img src="assets/search_icon.png" alt="" />
              <p>Looks like your library is empty! Try going to the "Search" guide and looking for some movies! </p>
            </div>
          </div>
      ) } 
      </div>
    </div>

  )
}
