import React from "react";

const Message = ({ text, type }) => {
  const getMessageStyle = () => {
    if (type === "success") {
      return { color: "lightgreen", border: "1px solid green", padding: "10px", margin: "10px 10px 32px" };
    } else if (type === "error") {
      return { color: "lightred", border: "1px solid red", padding: "10px", margin: "10px 10px 32px" };
    }

    return { padding: "10px", margin: "10px 10px 32px" };
  };

  return <div style={getMessageStyle()}>{text}</div>;
};

export default Message;
