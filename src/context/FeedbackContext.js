import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const feedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log("app " + id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedBack([newFeedback, ...feedback]);
  };
  return (
    <feedbackContext.Provider
      value={{ feedback: feedback, deleteFeedback, addFeedback }}
    >
      {children}
    </feedbackContext.Provider>
  );
};

export default feedbackContext;
