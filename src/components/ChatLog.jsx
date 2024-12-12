import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatList = ({messageData, onLikeChat}) => {
  const chatComponents = messageData.map((chat) => {
    return (
      <ChatEntry
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        likeCount={chat.likeCount}
        onLikeChat={onLikeChat}
        key={chat.id}
      />);
  });
  return (
    <>
      <h2> Cat List </h2>
      <ul>
        {chatComponents}
      </ul>
    </>
  ); 
}

ChatList.propTypes = {
  messageData: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
  })).isRequired,
  onLikeChat: PropTypes.func.isRequired
};

export default ChatList;