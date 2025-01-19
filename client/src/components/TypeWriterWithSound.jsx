import "./TypeWriterWithSound.css";
import PropTypes from "prop-types";

const TypeWriterWithSound = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

TypeWriterWithSound.propTypes  = {
  text: PropTypes.string.isRequired,
}

export default TypeWriterWithSound;
