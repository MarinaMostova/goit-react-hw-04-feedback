import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import Container from './Container';
import './FeedbackOptions/FeedbackOptions.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickButton = evt => {
    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const totalCount = good + neutral + bad;
  const percentage = Math.round((good / totalCount) * 100);
  const options = { good, neutral, bad };

  return (
    <Container>
      <Section text="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onClickButton={onClickButton}
        />
      </Section>
      <Section text="Statistic">
        {totalCount ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalCount}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
