import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useMovie } from "../Context/MovieContext";
import { useEffect, useState } from "react";

export const StarredCard = () => {
  const [storedData, setStoredData] = useState();

  const navigate = useNavigate();
  const { movieDispatch, movieStates } = useMovie();

  const removeFromStar = (movieId) => {
    movieDispatch({ type: "REMOVE_STAR_MOVIES", payload: movieId });
    movieDispatch({ type: "ADD_STAR_TO_LOCAL_STORAGE" });
  };

  useEffect(() => {
    const storedMovies = localStorage.getItem("staredMovie");
    setStoredData(JSON.parse(storedMovies));
  }, [movieDispatch, movieStates]);
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
      {storedData?.map((movie) => (
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
            <Button onClick={() => removeFromStar(movie.id)}>
              Remove Starred
            </Button>
            <Button>Add to Watchlist</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
