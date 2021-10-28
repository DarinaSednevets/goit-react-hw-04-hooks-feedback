
import "./base.css"
import { useMemo, useState } from "react";
import Section from "./components/Section/Section.js"
import Statistics from './components/Statistics/Statistics.js';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.js';
import Notification from "./components/Notification/Notification";


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBAd] = useState(0);

  const countFeedbackHandler = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'good':
        setGood(prevgood => prevgood + 1)
        break
      case 'neutral':
        setNeutral(prevneutral => prevneutral + 1)
        break
      case 'bad':
        setBAd(prevbad => prevbad + 1)
        break
      default:
        return;
    }
  };

  const countTotalFeedback = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = useMemo(() => {
    let totalFeedback = countTotalFeedback;
    let positiveFeedback = (good * 100) / totalFeedback;
    return totalFeedback !== 0 ? Math.round(positiveFeedback) : 0;
  }, [countTotalFeedback, good]);



  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={countFeedbackHandler}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ?
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />) :
          (<Notification message="No feedback given" ></Notification>)
        }
      </Section>
    </>
  );
};


export default App;




