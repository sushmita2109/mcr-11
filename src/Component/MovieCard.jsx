import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export const MovieCard = ({ filteredData }) => {
  return (
    <Card sx={{ maxWidth: 545 }}>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "8px" }}>
        <CardMedia
          sx={{ height: 240, width: 300 }}
          image={filteredData.imageURL}
          title="movieimage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {filteredData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {filteredData.summary}
          </Typography>
        </CardContent>
      </Box>

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
  );
};
