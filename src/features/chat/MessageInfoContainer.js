import React from 'react';


const MessageInfoContainer = (props) => {

  const message = props.message

  return (
    <React.Fragment>
      <div className="userimage">
        <img alt="userimage" src="../../assets/images/user__image.png" />
      </div>
      <div className="chatmessageview__messageinfo">
       <span className="username">{message.username}</span>
       <span className="date">{message.date}</span>
       <span className="message">{message.text} </span>
      </div>
    </React.Fragment>
  )

}

export default MessageInfoContainer;
