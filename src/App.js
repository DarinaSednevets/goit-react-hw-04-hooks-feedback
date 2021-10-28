import React, { Component } from 'react';
import Section from "./components/Section/Section.js"
import Statistics from './components/Statistics/Statistics.js';
import "./base.css"
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.js';
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countFeedbackHandler = event => {
    const { name } = event.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    let totalFeedback = this.countTotalFeedback();
    let positiveFeedback = (this.state.good * 100) / totalFeedback;
    return totalFeedback !== 0 ? Math.round(positiveFeedback) : 0;
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.countFeedbackHandler}
          />
        </Section>
        <Section title="Statistics">
          {total ?
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />) :
            (<Notification message="No feedback given" ></Notification>)
          }
        </Section>
      </div>
    );
  }
}

export default App;




