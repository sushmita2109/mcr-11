export const initialState = {
  allmovies: [],
  genre: "",
  year: "",
  ratting: "",
  searchTerm: "",
  staredMovies: [],
};
export const movieReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIES":
      const temp = action.payload.map((movie) => ({
        ...movie,
        starred: false,
      }));
      return {
        ...state,
        allmovies: temp,
      };
    case "GET_GENRE":
      return {
        ...state,
        genre: action.payload,
      };
    case "GET_YEAR":
      return {
        ...state,
        year: action.payload,
      };
    case "GET_RATTING":
      return {
        ...state,
        ratting: action.payload,
      };
    case "ADD_NEW_MOVIE":
      return {
        ...state,
        allmovies: [...state.allmovies, action.payload],
      };
    case "ADD_TO_LOCAL_STORAGE":
      const updatedMovies = [...state.allmovies];
      localStorage.setItem("allMovies", JSON.stringify(updatedMovies));
      return {
        ...state,
      };
    case "SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "ADD_STAR_MOVIES": {
      const starMovie = state?.allmovies?.find(
        (movie) => movie.id == action.payload
      );

      return {
        ...state,
        staredMovies: [...state.staredMovies, starMovie],
      };
    }
    case "ADD_STAR_TO_LOCAL_STORAGE": {
      const updatedMovies = [...state.staredMovies];
      localStorage.setItem("staredMovie", JSON.stringify(updatedMovies));

      return {
        ...state,
      };
    }
    case "REMOVE_STAR_MOVIES": {
      const filteredData = state?.staredMovies?.filter(
        (movie) => movie.id !== action.payload
      );

      return {
        ...state,
        staredMovies: [...filteredData],
      };
    }
    case "CHANGE_TO_STARRED": {
      const updatemovies = [...state?.allmovies];
      const temp = state?.allmovies?.find(
        (movie) => movie.id == action.payload
      );

      return {
        ...state,
        allmovies: [...state?.allmovies, { ...temp, starred: true }],
      };
    }
    default:
      return state;
  }
};
