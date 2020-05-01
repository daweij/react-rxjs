import React from "react";
import useObservable from "./useObservable";
import messageService from "./messageService";

const FormatTime = (date) => {
  if (date && date instanceof Date) {
    return date.toLocaleString();
  }
  return "undefined";
};

const Message = (props) => {
  const { message } = props;
  const { id, text, status } = message;

  const Remove = () => {
    messageService.remove(id);
  };

  const Complete = () => {
    message.status = "DONE";
    messageService.update(message);
  };

  const RenderButtons = (status) => {
    if (status === "ACTIVE") {
      return (
        <div className="btn-group btn-group-sm float-right">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => Complete()}
          >
            <i className="fa fa-check"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => Remove()}
          >
            <i className="fa fa-remove"></i>
          </button>
        </div>
      );
    }

    return null;
  };

  const CardClassByStatus = (status) => {
    switch (status) {
      case "DONE":
        return "card text-white bg-success mb-3";
      default:
        return "card text-white bg-primary mb-3";
    }
  };

  return (
    <div className={CardClassByStatus(status)}>
      <div className="card-header">
        {RenderButtons(status)}
        {text}
      </div>
    </div>
  );
};

const Messages = () => {
  const messages = useObservable(messageService.messages, []);

  return (
    <div>
      {messages &&
        messages.map((message, i) => <Message key={i} message={message} />)}
    </div>
  );
};

export default Messages;
