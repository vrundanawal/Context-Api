import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  //conditional render to see the how to add reverse class
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      //condtional styling to see the same out put using conditional class
      style={{
        backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
