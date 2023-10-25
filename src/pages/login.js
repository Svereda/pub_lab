import React, { useState } from 'react';
import './style_pages.css';
import { Link } from 'react-router-dom';

function Vhid() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Додайте код для обробки авторизації тут
  };
  return (

    <div className='aaa'>
      <div className='center-item'>
        <form onSubmit={handleLogin} className='login_form'>
          <div className='login_back'>
            <label for="username">Логін:</label>
            <input type="text" id="username" name="username" required value={username}onChange={(e) => setUsername(e.target.value)}/>
            <label for="password">Пароль:</label>
            <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <p></p>
            <input type="submit" value="Увійти" />
            <Link to="/new_user">зареєструватись</Link>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Vhid;

