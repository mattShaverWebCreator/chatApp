import React from 'react';
import './App.css';
import Chat from  './features/chat/Chat.js'

function App() {
  return (
    <div className="App">
    <header>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </header>
        <Chat>
        </Chat>
    </div>
  );
}

export default App;
