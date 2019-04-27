import React from "react";

const ChatMessageView = (props) => {

  const username = this.props.username;
  const date = this.props.date;
  const userimage = this.props.image;

  return (
    <section className="chatmessageview">
     <div className="chatmessageview__chatmessage">
       <div className="userimage">
         <img alt="userimage" src="../../assets/images/user__image.png" />
       </div>
       <div className="chatmessageview__messageinfo">
        <span className="username">{this.props.username}</span>
        <span className="date">1/11/111</span>
        <span className="message"> ELON MUSK IS A REPTILE </span>
       </div>
     </div>
    </section>
  );
};

export default ChatMessageView;
