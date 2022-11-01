import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState(FeedbackData);

  //create a global state for edit
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //delete feedback
  const deleteFeedback = (id) => {
    console.log("app " + id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //console.log(newFeedback);
    setFeedBack([newFeedback, ...feedback]);
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{ feedback: feedback, deleteFeedback, addFeedback, editFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
