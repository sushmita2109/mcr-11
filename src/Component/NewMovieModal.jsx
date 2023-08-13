import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMovie } from "../Context/MovieContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

export const NewMovieModal = ({ open, handleClose }) => {
  const [movieData, setMovieData] = useState({
    id: uuidv4(),
    title: "",
    genre: "",
    year: "",
    ratting: "",
    director: "",
    writer: "",
    cast: "",
    summary: "",
    imageUrl: "",
  });
  const { movieDispatch } = useMovie();
  const saveNewMovie = () => {
    movieDispatch({ type: "ADD_NEW_MOVIE", payload: movieData });
    movieDispatch({ type: "ADD_TO_LOCAL_STORAGE" });
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add new Movie
        </Typography>
        <TextField
          id="outlined-basic"
          label="title"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-1"
          label="genre"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, genre: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-2"
          label="year"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, year: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-3"
          label="ratting"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, ratting: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-4"
          label="director"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, director: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-5"
          label="writer"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, writer: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-6"
          label="cast"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, cast: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-7"
          label="summary"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, summary: e.target.value }))
          }
        />
        <TextField
          id="outlined-basic-8"
          label="image"
          variant="outlined"
          onChange={(e) =>
            setMovieData((prev) => ({ ...prev, imageUrl: e.target.value }))
          }
        />
        <Button onClick={() => saveNewMovie()}>Submit</Button>
        <Button onClick={() => handleClose()}>Cancle</Button>
      </Box>
    </Modal>
  );
};
