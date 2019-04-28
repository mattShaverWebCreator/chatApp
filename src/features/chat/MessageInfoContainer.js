import React from 'react';
import userimage from '../../assets/images/user__image.jpg'


const MessageInfoContainer = (props) => {

  const message = props.message

  return (
    <React.Fragment>
      <div className="chatmessageview__userimage">
        <img src={userimage} alt="userimage"/>
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
