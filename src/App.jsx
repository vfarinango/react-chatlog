import './App.css';
import chatMessages from './data/messages.json'
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const toggleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if(entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>{totalLikes} ❤️s</h1>
      </header>
      <main>
        <div className='App'>
          <ChatLog entries={entries} onLikeToggle={toggleLike} />
        </div>
      </main>
    </div>
  );
};

export default App;
