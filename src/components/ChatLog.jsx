import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const LOCAL_SENDER = 'Vladimir';

const ChatLog = ({ entries, onLikeToggle }) => {
    const getChatListJSX = (entries) => {
        return entries.map((entry) => {
            return (
                <ChatEntry
                    key={entry.id}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    isLocal={entry.sender === LOCAL_SENDER}
                    liked={entry.liked}
                    onLikeToggle={onLikeToggle}
                />
            );
        });
    };

    return (
        <div className='chat-log'>
            {getChatListJSX(entries)}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;