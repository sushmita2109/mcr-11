import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { LandingNavbar } from "./Component/LandingNavbar";
import { MovieDetail } from "./Pages/MovieDetail";
import { SearchPage } from "./Pages/SearchPage";
import { StaredMovies } from "./Pages/StaredMovies";

function App() {
  return (
    <div className="App">
      <LandingNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moviedetail/:movieId" element={<MovieDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/star" element={<StaredMovies />} />
      </Routes>
    </div>
  );
}

export default App;
