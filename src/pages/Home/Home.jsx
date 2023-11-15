import { useLayoutEffect, useState } from "react";
import FeaturedMovie from "../../components/FeaturedMovie/FeaturedMovie";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import moviesData from "./../../data/moviesData.json";
import "./styles.css";

const Home = () => {
  const [featured, setFeatured] = useState(moviesData.Featured);
  const [trendingMovies, setTrendingMovies] = useState(moviesData.TrendingNow);

  useLayoutEffect(() => {
    const lastClickedMovieID = sessionStorage.getItem("lastClickedMovieID");

    if (lastClickedMovieID) {
      const lastPlayedMovie = trendingMovies.find(
        (movie) => movie.Id === lastClickedMovieID
      );
      setFeatured(lastPlayedMovie);
      const updatedTrendingMovies = trendingMovies.filter(
        (movie) => movie.Id !== lastClickedMovieID
      );
      setTrendingMovies([lastPlayedMovie, ...updatedTrendingMovies]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetFeatured = (movie) => {
    setFeatured(movie);
    sessionStorage.setItem("lastClickedMovieID", movie.Id);
  };

  return (
    <div className="home-section">
      <FeaturedMovie data={featured} />
      <TrendingMovies data={trendingMovies} setFeatured={handleSetFeatured} />
    </div>
  );
};

export default Home;
