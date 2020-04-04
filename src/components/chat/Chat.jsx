import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../actions/actions';

const Chat = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const messages = useSelector(s => s.chat.messages);
  return (
    <div>
      <div className="messages">{messages}</div>
      <div className="inputs">
        <input
          type="text"
          name="message"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <button
          type="button"
          className="btn-primary"
          onClick={() => dispatch(sendMessage(message))}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default Chat;
