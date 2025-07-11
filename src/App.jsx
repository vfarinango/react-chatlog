import './App.css';
import chatMessages from './data/messages.json'
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div className='App'>
          <ChatLog entries={chatMessages} />
        </div>
      </main>
    </div>
  );
};

export default App;
