import React from "react";

const Helmet = (props) => {
  document.title = "Car Professional - " + props.title;
  return(
   <div className="">{props.children}</div>
  )
};

export default Helmet;
