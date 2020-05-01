import React, { useState, useRef } from "react";
import messageService from "./messageService";

const Form = () => {
  const [text, setText] = useState("");
  const textInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length) {
      messageService.add(text);
      textInput.current.focus();
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textInput}
          autoFocus
        />

        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
