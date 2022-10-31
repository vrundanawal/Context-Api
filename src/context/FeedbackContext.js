import { createContext, useState } from "react";

const feedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "This is feedback item 1 from Context ",
    },
    {
      id: 2,
      rating: 8,
      text: "This is feedback item 2 from Context ",
    },
  ]);
  return (
    <feedbackContext.Provider value={{ feedback: feedback }}>
      {children}
    </feedbackContext.Provider>
  );
};

export default feedbackContext;
