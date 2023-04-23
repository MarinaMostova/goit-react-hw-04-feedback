import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback__container">
      {options.map(option => {
        return (
          <button
            onClick={() => onLeaveFeedback(option)}
            className={`feedback__button ${option}`}
            key={option}
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
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default Feedback;
