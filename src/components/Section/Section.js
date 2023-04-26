import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ text, children }) => {
  return (
    <section>
      <h2 className="feedback__title">{text}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Section;
