import React from "react";
import MessageInfoContainer from './MessageInfoContainer.js'

const ChatMessageView = (props) => {

  const messageinfocontainers = [];
  const username = props.messages.username;
  const date = props.messages.date;
  const messages = props.messages;
  const userimage = props.messages.image;

  console.log(messages)

messages.forEach((message) => {
      messageinfocontainers.push (
        <MessageInfoContainer message={message} key={message.text}/>
      );
});


  return (

        <section className="chatmessageview">
         <div className="chatmessageview__chatmessage">
          {messageinfocontainers}
         </div>
        </section>
      )

}

export default ChatMessageView;
