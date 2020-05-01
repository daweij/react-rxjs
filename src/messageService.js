import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { v4 as uuidv4 } from "uuid";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

const messageService = {
  __messages: [],
  __publish: () => {
    messageService.messages.next(messageService.__messages);
  },

  messages: new BehaviorSubject([]),
  add: (text) => {
    let message = {
      id: uuidv4(),
      created: new Date(),
      text: text,
      status: "ACTIVE",
    };

    messageService.__messages = [...messageService.__messages, message];
    messageService.__publish();
  },
  remove: (id) => {
    messageService.__messages = messageService.__messages.filter(
      (message) => message.id !== id
    );
    messageService.__publish();
  },
  update: (message) => {
    messageService.__messages = messageService.__messages.map((m) => {
      if (m.id === message.id) {
        return message;
      }
      return m;
    });
    messageService.__publish();
  },
  clear: () => {
    messageService.__messages = [];
    messageService.__publish();
  },
};

export default messageService;
