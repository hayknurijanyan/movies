import PropTypes from "prop-types";
import titleImage from "/assets/imgs/FeaturedTitleImage.png";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import { convertDurationToHoursMinutes } from "../../helpers/dateAndTime";
import "./styles.css";

const FeaturedMovie = ({ data }) => {
  return (
    <div className="featured-movie-container">
      <h5 className="section-title">{data.Category.toUpperCase()}</h5>
      <div className="featured-content">
        <img src={titleImage} alt="featured image title" />
        <div className="movie-info-container">
          <span className="movie-info">{data.ReleaseYear}</span>
          <span className="movie-info">{data.MpaRating}</span>
          <span className="movie-info">
            {convertDurationToHoursMinutes(data.Duration)}
          </span>
          <div className="movie-story">
            <span className="movie-story-text">{data.Description}</span>
          </div>
        </div>
        <div className="buttons">
          <button className="oval-button">
            <div className="play-icon" />
            Play
          </button>
          <button className="oval-button gradient">More Info</button>
        </div>
      </div>
      {data.VideoUrl && (
        <BackgroundVideo key={data.VideoUrl} src={data.VideoUrl} />
      )}
    </div>
  );
};
FeaturedMovie.propTypes = {
  data: PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    CoverImage: PropTypes.string.isRequired,
    TitleImage: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    MpaRating: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Duration: PropTypes.string.isRequired,
    VideoUrl: PropTypes.string,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedMovie;
