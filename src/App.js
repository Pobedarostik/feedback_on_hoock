import {useState} from "react";
import Section from "./Section/Section"
import Statistic from "./Statistic/Statistic";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => {
    return good + neutral + bad;
  }
  
 const onLeaveFeedback = (e) => {
   const name = e.target.name;

    switch (name) {
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  }

  const positivePercentage = () => {

    const percentag = (good * 100) / total();
    return Math.round(percentag);

  }

  const objKey = ["good", "neutral", "bad"]


  return(
      <>
      <Section title= "Please leave feedback">
      <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback}/>
      
      </Section>
        {total() === 0 ? <p>"No feedback given"</p> : 
      <Section title="Statistics">
          
      <Statistic good={good} neutral={neutral} bad={bad} total={total()} positivePercentage={positivePercentage()}/>
      </Section>}

      
      </>
    )
}

