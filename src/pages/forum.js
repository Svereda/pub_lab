import React, { useState } from 'react';
import './style_pages.css'; // Перейменовано файл стилів на Forum.css

function Forum() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'Користувач 1', text: 'Перше повідомлення' },
    { id: 2, name: 'Користувач 2', text: 'Друге повідомлення' },
    { id: 3, name: 'Користувач 3', text: 'Третє повідомлення' },
  ]);

  const [isAddingComment, setIsAddingComment] = useState(false);
  const [newMessage, setNewMessage] = useState({ name: '', text: '' });

  const addComment = () => {
    if (newMessage.name && newMessage.text) {
      setMessages([...messages, { id: messages.length + 1, ...newMessage }]);
      setNewMessage({ name: '', text: '' });
      setIsAddingComment(false);
    }
  };

  return (
    <div className="forum-container">
      <h1 className='texte'>Форум</h1>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p><strong>{message.name}:</strong> {message.text}</p>
          </div>
        ))}
      </div>
      {isAddingComment ? (
        <div className="add-comment">
          <input
            type="text"
            className="input"
            placeholder="Ім'я"
            value={newMessage.name}
            onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
          />
          <textarea
            className="input"
            placeholder="Повідомлення"
            value={newMessage.text}
            onChange={(e) => setNewMessage({ ...newMessage, text: e.target.value })}
          />
          <button className="submit-button" onClick={addComment}>Надіслати</button>
        </div>
      ) : (
        <button className="add-comment-button" onClick={() => setIsAddingComment(true)}>Додати коментар</button>
      )}
    </div>
  );
}

export default Forum;
