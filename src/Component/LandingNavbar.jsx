import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import { useMovie } from "../Context/MovieContext";

export const LandingNavbar = () => {
  const navigate = useNavigate();
  const { movieDispatch } = useMovie();

  const handleSearch = (e) => {
    movieDispatch({ type: "SEARCH_TERM", payload: e.target.value });
    navigate("/search");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "8px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        IMDB
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search Movie by title,cast and director"
        variant="outlined"
        onChange={(e) => handleSearch(e)}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "8px",
          gap: "5px",
        }}
      >
        <Typography variant="boby1" gutterBottom onClick={() => navigate("/")}>
          Movies
        </Typography>
        <Typography variant="body1" gutterBottom>
          Watch List
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          onClick={() => navigate("/star")}
        >
          Starred Movie
        </Typography>
      </Box>
    </Box>
  );
};
