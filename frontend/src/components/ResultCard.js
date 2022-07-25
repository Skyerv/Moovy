import React from 'react'

export const ResultCard = ({movie}) => {
  return (
    <div className='result-card'>
        <div className='poster-wrapper'>
            {movie.Poster ? (
                <img src={movie.Poster}
                alt={`${movie.title} Poster`} />
            ) : (
                <div className="filler-poster">
                    
                </div>
            )}
        </div>

        <div className='info'>
            <div className='header'>
                <h3 className='title'>{movie.Title}</h3>
                <h4 className='release-date'>
                    {movie.Year ? movie.Year : "Unknown year"}
                </h4>
            </div>

            <div className="controls">
                <button className='btn2'>Add to My Library</button>
            </div>
        </div>
    </div>
  )
}
