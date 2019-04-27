import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ChatInput extends Component {

  constructor() {

  }

  render() {
    <section className="chatinput">
      <form className="chatinput__form">
          <div className="chaticon">
            <img alt="chaticon" src="../../assets/images/chaticon.svg" />
          </div>
          <div className="chatinput">
            <input type="text" placeholder="Type your message" />
          </div>
          <div className="chatsubmit">
            <button type="submit" className="chatsubmit__button">
              <img alt="chatsubmit" src="../../assets/images/chaticon.svg" />
            </button>
          </div>
       </form>
       <div className="chatuserinfo">
        <img alt="userimage" src="../../assets/images/user__image.png" />
        <span>Joe Rogan</span>
       </div>
    </section>
  }

}

export default ChatInput;
