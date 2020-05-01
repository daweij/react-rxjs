import React from "react";
import useObservable from "./useObservable";
import messageService from "./messageService";

const FormatTime = (date) => {
  if (date && date instanceof Date) {
    return `${date.getUTCHours()}:${date.getUTCMinutes()}`;
  }
  return "00:00";
};

const Message = (props) => {
  const { message } = props;

  return (
    <div className="alert alert-primary">
      <strong>{FormatTime(message.created)}: </strong>
      {message.text}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span
          aria-hidden="true"
          onClick={() => messageService.remove(message.id)}
        >
          &times;
        </span>
      </button>
    </div>
  );
};

const Messages = (props) => {
  const messages = useObservable(messageService.messages, []);

  return (
    <div>
      {messages &&
        messages.map((message, i) => <Message key={i} message={message} />)}
    </div>
  );
};

export default Messages;
