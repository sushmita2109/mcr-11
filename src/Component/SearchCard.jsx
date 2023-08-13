import { useMovie } from "../Context/MovieContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const SearchCard = () => {
  const { SearchedMovies } = useMovie();
  const navigate = useNavigate();
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
      {SearchedMovies.length > 0 ? (
        SearchedMovies?.map((movie) => (
          <Card
            key={movie.id}
            sx={{ maxWidth: 345 }}
            onClick={() => navigate(`/moviedetail/${movie.id}`)}
          >
            <CardMedia
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
              <Button>Star</Button>
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
