import React from "react";
import { useLoaderData } from "react-router-dom";

const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <div className="p-4 w-80">
      <img src={moviesData.Poster} className="h-80 w-64" alt="" />
      <h1>
        <span className="font-bold">Title:-</span> {moviesData.Title}
      </h1>
      <p>
        <span className="font-bold">imdb-Rating:-</span> {moviesData.imdbRating}
      </p>
      <p>
        <span className="font-bold">Year:-</span> {moviesData.Year}
      </p>
      <p>
        <span className="font-bold">Actor:-</span> {moviesData.Actors}
      </p>
      <p>
        <span className="font-bold">Box-Office Collection:-</span>{" "}
        {moviesData.BoxOffice}
      </p>
      <p>
        <span className="font-bold">Genre:-</span> {moviesData.Genre}
      </p>
      {/* <ul className="flex flex-col gap-5">
        {moviesData &&
          moviesData.Ratings.map((currElem) => {
            return (
              <div>
                <li key={currElem.imdbID}>
                  {currElem.Source} - {currElem.Value}
                </li>
              </div>
            );
          })}
      </ul> */}
    </div>
  );
};

export default Movie;
