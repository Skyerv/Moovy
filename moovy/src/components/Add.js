import React, { useState } from "react";

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
      <div className="container">
        <div className="add-content">
            <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li>
                  {movie.Title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};