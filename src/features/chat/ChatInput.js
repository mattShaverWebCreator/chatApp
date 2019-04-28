import React, {Component} from 'react'
import PropTypes from 'prop-types'
import userimage from '../../assets/images/user__image.jpg'


class ChatInput extends Component {

  render() {
   return  <section className="chatinput">
            <form className="chatinput__form">
                <div className="chaticon">
                  <img alt="chaticon" src="../../assets/images/chaticon.svg" />
                </div>
                <div className="chatinput__text">
                  <input type="text" placeholder="Type your message" />
                </div>
                <div className="chatinput__submit">
                  <button type="submit" className="chatsubmit__button">

                  </button>
                </div>
             </form>
             <div className="chatinput__userinfo">
              <img src={userimage} alt="userimage" />
              <span>Alex Jones</span>
             </div>
          </section>
  }

}

export default ChatInput;
