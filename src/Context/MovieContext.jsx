import { createContext, useContext, useEffect, useReducer } from "react";
import { movieReducer, initialState } from "../Reducer/movieReducer";
import { movies } from "../Data/movies";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieStates, movieDispatch] = useReducer(movieReducer, initialState);

  const getData = () => {
    movieDispatch({ type: "GET_ALL_MOVIES", payload: movies });
  };

  const applyFilter = (movies) => {
    let filteredData;
    const storedMovies = localStorage.getItem("allMovies");
    if (storedMovies) {
      const storedData = JSON.parse(storedMovies);
      filteredData = [...storedData];
    } else {
      filteredData = [...movies];
    }
    const genreValue = movieStates?.genre;

    const yearValue = movieStates?.year;
    const rattingValue = movieStates?.ratting;

    if (genreValue) {
      filteredData = filteredData?.filter((movie) =>
        movie?.genre?.includes(genreValue)
      );
    }
    if (yearValue) {
      filteredData = filteredData?.filter((movie) => movie?.year == yearValue);
    }
    if (rattingValue) {
      filteredData = filteredData?.filter(
        (movie) => movie?.ratting == rattingValue
      );
    }
    return filteredData;
  };

  const filteredMovies = applyFilter(movieStates?.allmovies);

  const searchFilter = (movies) => {
    let searchedMovies = [...movies];
    const searchTerm = movieStates?.searchTerm;
    if (searchTerm) {
      searchedMovies = searchedMovies?.filter(
        (movie) =>
          movie?.title?.includes(searchTerm) ||
          movie?.director?.includes(searchTerm) ||
          movie?.cast?.includes(searchTerm)
      );
    }
    return searchedMovies;
  };

  const SearchedMovies = searchFilter(movieStates?.allmovies);
  useEffect(() => {
    getData();
  }, []);
  return (
    <MovieContext.Provider
      value={{ movieStates, movieDispatch, filteredMovies, SearchedMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
