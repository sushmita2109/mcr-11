import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useMovie } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LandingPage = () => {
  const { filteredMovies, movieDispatch, movieStates } = useMovie();

  const [star, setStar] = useState();

  const navigate = useNavigate();
  const addToStar = (movieId) => {
    movieDispatch({ type: "ADD_STAR_MOVIES", payload: movieId });
    movieDispatch({ type: "ADD_STAR_TO_LOCAL_STORAGE" });
    movieDispatch({ type: "CHANGE_TO_STARRED", payload: movieId });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "8px",
        gap: "8px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {filteredMovies.length > 0 ? (
        filteredMovies?.map((movie) => (
          <Card key={movie.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              onClick={() => navigate(`/moviedetail/${movie.id}`)}
              sx={{ height: 140 }}
              image={movie.imageURL}
              title="movieimage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.summary}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "8px",
              }}
            >
              <Button onClick={() => addToStar(movie.id)}>
                {movie.starred ? "Starred" : "Star"}
              </Button>
              <Button>Add to Watchlist</Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography variant="h2">No Match Found</Typography>
      )}
    </Box>
  );
};
