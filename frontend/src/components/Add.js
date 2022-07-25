import React, { useState, useEffect } from "react";
import { ResultCard2 } from "./ResultCard2";
import { TopButton } from './TopButton'

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://www.omdbapi.com/?apikey=fa715c13&s=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if(!data.errors){
            if(data.Search !== undefined){
                setResults(data.Search);
            }
        } else {
            setResults([]);
        }
      });
  };

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="add-page">
      <div className="space">
        <p>aa</p>
      </div>
      <div className="search-header">
        <img src="assets/search_icon.png" alt="" className="header-search-icon" />
        <h1>Search</h1>
      </div>
      <div className="container">
        <div className="add-content">
            <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
            <img src="assets/search_icon.png" alt="" />
          </div>

          {results.length > 0 ? (
            <div className="movie-grid">
              {results.map((movie) => (
                <div className="result-grid" key={movie.imdbID}>
                  <div className="item">
                    <ResultCard2 movie={movie} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="find-container">
              <div className="empty">
                <img src="assets/search_icon.png" alt="" />
                <p>We couldn't find the movies you were looking for :c </p>
              </div>
            </div>
              
          )}
        </div>
        <div>
          <TopButton />
        </div>
      </div>
    </div>
  );
};