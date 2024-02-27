import React from "react";
import "./PageHeaderContent.css";

const PageHeaderContent = (props) => {
  // Destructure props to access individual properties
  const { headerText, icon } = props;

  return (
    <div className='wrapper'>
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
