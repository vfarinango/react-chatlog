import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json'

const App = () => {
  const firstMessage = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <div>
          <ChatEntry 
            sender={firstMessage.sender}
            body={firstMessage.body}
            timeStamp={firstMessage.timeStamp}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
