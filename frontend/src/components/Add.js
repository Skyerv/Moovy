import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import { ResultsGrid } from './ResultsGrid'
import { ResultCard2 } from "./ResultCard2";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  let movieArr;

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://www.omdbapi.com/?apikey=fa715c13&s=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if(!data.errors){
            if(data.Search != undefined){
                setResults(data.Search);
            }
        } else {
            setResults([]);
        }
      });
  };

  console.log(results)

  return (
    <div className="add-page">
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
            <ul className="results">
              {results.map((movie) => (
                <div className="result-grid">
                  <div key={movie.imdbID} className="item">
                    <ResultCard2 movie={movie} />
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <div className="find-container">
              <div className="empty">
                <img src="assets/search_icon.png" alt="" />
                <p>We couldn't find the movies you were looking for :c </p>
              </div>
            </div>
              
          )}
        </div>
      </div>
    </div>
  );
};