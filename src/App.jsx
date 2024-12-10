import './App.css';
import messages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const firstMessage = messages[0];

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {
          <ChatEntry
            sender={firstMessage.sender}
            body={firstMessage.body}
            timeStamp={firstMessage.timeStamp}
          />
        /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
