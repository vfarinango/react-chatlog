import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp, isLocal }) => {
  const entryClass = isLocal ? 'chat-entry local' : 'chat-entry remote';
  return (
    <div className={entryClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"> <TimeStamp time={timeStamp}></TimeStamp> </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLocal: PropTypes.bool.isRequired,
};

export default ChatEntry;
