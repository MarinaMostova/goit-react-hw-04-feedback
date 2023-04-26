import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const Feedback = ({ options, onClickButton }) => {
  return (
    <div className="feedback__container">
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={onClickButton}
            className={`feedback__button ${option}`}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClickButton: PropTypes.func.isRequired,
};
export default Feedback;
