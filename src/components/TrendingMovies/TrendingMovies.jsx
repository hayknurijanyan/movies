import { useRef } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const TrendingMovies = ({ data, setFeatured }) => {
  const moviesContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    moviesContainerRef.current.scrollLeft += scrollOffset;
  };

  const getCoverImage = (imageName) => `url(assets/imgs/${imageName})`;

  const delayedSetFeatured = (movie) => {
    setTimeout(() => setFeatured(movie), 500);
  };

  return (
    <div className="trending-movies-container">
      <h5 className="section-title">Trending Now</h5>
      <div className="scroll-btn left" onClick={() => handleScroll(-200)}></div>
      <div className="trending-movies" ref={moviesContainerRef}>
        {data.map((movie) => (
          <div
            key={movie.Id}
            className="movie-item"
            style={{ backgroundImage: getCoverImage(movie.CoverImage) }}
            onClick={() => delayedSetFeatured(movie)}
          />
        ))}
      </div>
      <div className="scroll-btn right" onClick={() => handleScroll(200)}></div>
    </div>
  );
};

TrendingMovies.propTypes = {
  setFeatured: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      CoverImage: PropTypes.string.isRequired,
      TitleImage: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
      ReleaseYear: PropTypes.string.isRequired,
      MpaRating: PropTypes.string.isRequired,
      Category: PropTypes.string.isRequired,
      Duration: PropTypes.string.isRequired,
      VideoUrl: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default TrendingMovies;
