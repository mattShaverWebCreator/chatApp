import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatMessageView from './ChatMessageView.js'
import ChatInput from './ChatInput.js'

class Chat extends Component {

   constructor() {
     super()
     this.state = { listofmessages: [], messagetext: ''}
   }

   render() {
     return (
       <React.Fragment>
         <ChatMessageView messages={this.props.listofmessages} messagetext={this.props.messagetext}/>
         <ChatInput messages={this.props.listofmessages} messagetext={this.state.messagetext}/>
       </React.Fragment>
    )
   }
}

   const listofmessages = [
     { username: "Alex Jones", date: "1/11/1111", image: "default", text: "REPTILES RULE EVERYTHING AROUND ME" }
   ]

export default Chat
