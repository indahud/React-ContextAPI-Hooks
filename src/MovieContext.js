import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Fight Club",
      price: "$5",
      id: 100,
    },
    {
      name: "Social Network",
      price: "$7",
      id: 200,
    },
    {
      name: "Mank",
      price: "$10",
      id: 300,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
