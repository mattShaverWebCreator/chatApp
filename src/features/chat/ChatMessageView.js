import React from "react";
import MessageInfoContainer from './MessageInfoContainer.js'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">


const ChatMessageView = (props) => {

  const messageinfocontainers = [];
  const messages = props.messages;

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
