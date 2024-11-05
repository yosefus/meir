import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { sender: 'Me', message: 'Such a beautiful picture!' },
    { sender: 'Jorge820', message: 'Lorem Ipsum!' },
    { sender: 'xd100200', message: 'Indeed!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'You', message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="rounded-lg shadow-md ">
      <div className="p-4 border-b">
        <span className="font-medium">Chat</span>
      </div>
      <div className="h-64 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="p-4 flex items-start">
            <div className="bg-gray-200 rounded-lg px-4 py-2 mr-4">
              <span className="font-medium">{message.sender}:</span> <span>{message.message}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <input
          type="text"
          className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message here"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;