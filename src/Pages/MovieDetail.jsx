import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { MovieCard } from "../Component/MovieCard";
import { useMovie } from "../Context/MovieContext";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const { movieStates } = useMovie();
  const filteredData = movieStates?.allmovies?.find(
    (movie) => movie.id == movieId
  );

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <MovieCard filteredData={filteredData} />
    </Box>
  );
};
