import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import Container from './Container';
import './FeedbackOptions/FeedbackOptions.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage(total) {
    return Math.round((this.state.good / total) * 100);
  }

  onClickButton = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(totalCount);

    return (
      <Container>
        <Section text="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickButton}
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
  }
}

export default App;
