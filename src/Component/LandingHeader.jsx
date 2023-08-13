import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useMovie } from "../Context/MovieContext";
import { NewMovieModal } from "./NewMovieModal";

export const LandingHeader = () => {
  const [movieGenre, setMovieGenre] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieRatting, setMovieRatting] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { movieDispatch } = useMovie();
  const genres = [
    "Drama",
    "Crime",
    "Action",
    "Adventure",
    "Fantasy",
    "Romance",
    "Sci-Fi",
    "Biography",
    "All Movies",
  ];
  var yearsArray = [];
  for (var year = 1990; year <= 2023; year++) {
    yearsArray.push(year);
  }
  const rattings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (event) => {
    setMovieGenre(event.target.value);
    movieDispatch({ type: "GET_GENRE", payload: event.target.value });
  };
  const handleYear = (event) => {
    setMovieYear(event.target.value);
    movieDispatch({ type: "GET_YEAR", payload: event.target.value });
  };
  const handleRattings = (event) => {
    setMovieRatting(event.target.value);
    movieDispatch({ type: "GET_RATTING", payload: event.target.value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "5px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Movies
      </Typography>
      <FormControl sx={{ width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Movie Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={movieGenre}
          label="MovieGenre"
          onChange={handleChange}
        >
          {genres?.map((genre, idx) => (
            <MenuItem value={genre} key={idx}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Movie Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={movieYear}
          label="MovieYear"
          onChange={handleYear}
        >
          {yearsArray?.map((year, idx) => (
            <MenuItem value={year} key={idx}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Movie Rattings</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={movieRatting}
          label="Movieratting"
          onChange={handleRattings}
        >
          {rattings?.map((ratting, idx) => (
            <MenuItem value={ratting} key={idx}>
              {ratting}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={() => handleOpen()} variant="contained">
        New
      </Button>
      <NewMovieModal open={open} handleClose={handleClose} />
    </Box>
  );
};
