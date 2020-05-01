import React, { useState, useRef } from "react";
import messageService from "./messageService";

const Form = () => {
  const [text, setText] = useState("");
  const textInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      messageService.add(text);
      textInput.current.focus();
      setText("");
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    messageService.clear();
    textInput.current.focus();
  };

  const isFormValid = () => {
    return text.length;
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
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid()}
          >
            Add
          </button>
        </div>
        <div className="input-group-append">
          <button type="reset" className="btn btn-danger" onClick={handleReset}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
