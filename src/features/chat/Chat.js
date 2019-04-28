import React, { Component } from 'react'
import ChatMessageView from './ChatMessageView.js'
import ChatInput from './ChatInput.js'


class Chat extends Component {

   constructor() {
     super()

     const listofmessages = [
        { username: "Alex Jones", date: "1/11/1111", image: "default", text: "REPTILES RULE EVERYTHING AROUND ME" }
     ]

     this.state = { listofmessages: listofmessages, messagetext: ''}
   }

   render() {
     return (
       <React.Fragment>
         <ChatMessageView messages={this.state.listofmessages} messagetext={this.state.messagetext}/>
         <ChatInput messages={this.state.listofmessages} messagetext={this.state.messagetext}/>
       </React.Fragment>
    )
   }
}


export default Chat
