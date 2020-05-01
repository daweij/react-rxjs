import React from "react";
import Form from "./Form";
import Messages from "./Messages";

const App = () => {
  return (
    <div className="container">
      <h1>Add message:</h1>
      <Form />
      <Messages />
    </div>
  );
};

export default App;
