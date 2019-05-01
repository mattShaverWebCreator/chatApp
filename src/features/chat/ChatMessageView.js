import React from 'react';
import MessageInfoContainer from './MessageInfoContainer.js';

const ChatMessageView = props => {
  const messageinfocontainers = [];
  const messages = props.messages;

  console.log(messages);

  messages.forEach(message => {
    messageinfocontainers.push(
      <MessageInfoContainer message={message} key={message.text} />
    );
  });

  return (
    <section className="chatmessageview">
      <div className="chatmessageview__chatmessage">
        {messageinfocontainers}
      </div>
    </section>
  );
};

export default ChatMessageView;
