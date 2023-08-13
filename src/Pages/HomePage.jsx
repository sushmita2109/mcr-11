import Box from "@mui/material/Box";
import { LandingPage } from "../Component/LandingPage";
import { LandingHeader } from "../Component/LandingHeader";

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "8px",
        height: "100vh",
      }}
    >
      <LandingHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          padding: "8px",
        }}
      >
        <LandingPage />
      </Box>
    </Box>
  );
};
