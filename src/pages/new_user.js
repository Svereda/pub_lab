import React, { useState } from 'react';
import './style_pages.css';
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Відправка даних на сервер або логіка реєстрації
  };

  return (
    <div className='aaa'>
        <div className='center-item'>
            <div className='login_back'>
                <form onSubmit={handleSubmit} className='login_form'>
                <label>Ім'я користувача</label>
                <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                    <label>Пароль</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
                <p></p>
                <input type="submit" value="Увійти" />
                </form>
            </div>


        </div>
    </div>
  );
}

export default RegistrationForm;
