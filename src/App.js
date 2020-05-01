import React from "react";
import Form from "./Form";
import Messages from "./Messages";

const App = () => {
  return (
    <div className="container">
      <h1>Messages:</h1>
      <Form />
      <Messages />
    </div>
  );
};

export default App;
