import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
  const [feedback, setFeedBack] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedBack([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    console.log("app " + id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
               <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;