import PropTypes from "prop-types";
import "./styles.css";

const BackgroundVideo = ({ src }) => {
  return (
    <div className="background-video">
      <video className="video" autoPlay loop muted controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

BackgroundVideo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BackgroundVideo;
