import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import {useState} from 'react';


function App () {
  const [messageData, setMessageData] = useState(messages);

  const handleLikeChat = (id) => {
    setMessageData(messageData => messageData.map(chat =>{
      if (chat.id === id){
        return {...chat, liked: !chat.liked};
      } else {
        return chat;
      }
    }));
  };

  const calculateTotalLikeCount = (messageData) => {
    return messageData.filter((chat) => chat.liked).length;
  };

  const totalLikes = calculateTotalLikeCount(messageData);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={messageData} onLikeChat={handleLikeChat}/>
      </main>
    </div>
  );
};

export default App;
