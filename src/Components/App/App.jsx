import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

export default function App() {
  //   const [types, setTypes] = useState({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });

  const [types, setTypes] = useState(() => {
    const saveFeedback = window.localStorage.getItem("savedFeedback");
    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setTypes({
      ...types,
      [feedbackType]: types[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = types.good + types.neutral + types.bad;
  const positiveFeedback = Math.round((types.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("savedFeedback", JSON.stringify(types));
  }, [types]);

  return (
    <>
      <Description />

      <Options
        onClickBotton={updateFeedback}
        onClickReset={resetFeedback}
        total={totalFeedback}
      />
      <div>
        {totalFeedback > 0 ? (
          <Feedback
            good={types.good}
            neutral={types.neutral}
            bad={types.bad}
            total={totalFeedback}
            positive={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
