import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./requests";
import "./Results.css";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  // state is how to write variable inside react
  const [movies, setMovies] = useState([]);

  //connecting react to the api

  useEffect(() => {
    //if [] is left blank its saying to run this code once when the Results component loads
    //if there is no [] then its saying to run this code EVERY time Results component loads
    //if there is a dependencies in [], it will do both of the above as the "name" changes

    async function fetchData() {
      //   const request = await axios.get(requests.fetchActionMovies);
      const request = await axios.get(selectedOption);
      //   console.log(request);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
