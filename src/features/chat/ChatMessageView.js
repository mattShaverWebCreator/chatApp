import React from "react";

const ChatMessageView = (props) => {
  const ChatMessage = this.props.chatMessage;

  return (
    <section className="chatmessageview">
     <div className="chatmessageview__chatmessage">
       <div className="userimage">
         <img alt="userimage" src="../../assets/images/user__image.png">
       </div>
       <div className="chatmessageview__messageinfo">
        <span className="username">Joe Rogan</span>
        <span className="date">1/11/111</span>
        <span className="message"> ELON MUSK IS A REPTILE </message>
       </div>
     </div>
    </section>
  );
};

export default ChatMessageView;
