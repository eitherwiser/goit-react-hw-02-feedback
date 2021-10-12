import './App.css';
import React from 'react';
import Section from "./components/section/Section";
import Statistics from "./components/statistics/Statistics";
import FeedbackOptions from "./components/feedback/FeedbackOptions";
import Notification from "./components/notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  feedbackIncrement = (e) => {
    this.setState((prevState) => {
      return { [e.target.value]: prevState[e.target.value] + 1 }
    });
  };



  render() {

    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback" className="feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />


            </>
          ) : (
            <Notification message="There are no feedbacks here yet." />
          )}
        </Section>
      </>
    );
  }
}

export default App;
