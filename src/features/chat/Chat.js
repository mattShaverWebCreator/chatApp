import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Chat extends Component {

   constructor() {
     super()
     this.state = { listofmessages: [], messagetext: ''}
   }

   render() {
     return (
       <React.Fragment>
         <ChatMessageView listofmessages={this.props.listofmessages} messagetext={this.props.messagetext}/>
         <ChatInput listofmessages={this.props.listofmessages} messagetext={this.state.messagetext}/>
       </React.Fragment>
    )
   }

   const listofmessages = [
     { username: "Joe Rogan", date: "1/11/1111", image: "default", text: "REPTILES RULE EVERYTHING AROUND ME" }
   ]


   }


}
