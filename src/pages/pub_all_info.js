import React, { useState } from 'react';
import './style_pages.css';
import pab_logo_1 from '../image/pub_logo_1.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import CommentModal from './modalwindow';

function PubAllInfo() {
  const [isCommentModalOpen, setCommentModalOpen] = useState(false);

  const openCommentModal = () => {
    setCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
  };

  return (
    <div className='aaa'>
      <div className='center-item'>
        <div className='bgrnd'>
          <div className='pub_all_info'>
            <img className='pub_logo' src={pab_logo_1} alt="Це опис зображення" />
            <div className='pub_info_t'>
              <div className='pub_name'>Добрий Друг </div>
              <div className='pub_text'>Телефон: +(380)537-12-46</div>
              <div className='pub_text'> Адреса: м.Львів, вул. Лесі Українки, 19</div>
              <div className='pub_text'> Графік роботи: 9:00-22:30</div>
            </div>
          </div>

          <div className='pub_short_info'>Паб відомий завдяки великому вибору крафтового пива на різний смак, сидрів та смачних страв. Подають різні закуски, бургери, стейки, піцу...
            Це атмосферне місце, куди приходять відпочити компанії друзів, а також подивитись футбольні трансляції
          </div>
          <div className='pub_short_info'>Тут вас чекає 24 сорти справжнього крафтового пива, а також:
            віскі, коктейлі, лимонади, бренді, ром, джин, текіла та найсвіжіші фреші.
          </div>
          <div className='pub_short_info'>Ми пропонуєм 10 смачних та великих піц, 15 соковитих бургерів, та багато інших страв під будь який настрій та вподобання. </div>
          <button className='open_com' onClick={openCommentModal}>Відкрити коментарі</button>
        </div>
        

        {isCommentModalOpen && (
  <div className="modal-container">
    <button className="open_com" onClick={closeCommentModal}>Закрити</button>
    <p></p>
    <div className="modal-content">
      
      <CommentModal onRequestClose={closeCommentModal} />
      <div className='comment'>
        Андрій:
        <div className='comment_text'>
          Заклад чудовий
        </div>
      </div>
      <div className='comment'>
        Андрій:
        <div className='comment_text'>
          Заклад чудовий
        </div>
      </div>
      <p></p>
      <form className='comment_form'>
        <label for='text'>Введіть ім'я:</label>
        <input type='text'/>
        <label for='text'>Напишіть ваш коментар:</label>
        <input type='text'/>
        <input type='submit'/>
      </form>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default PubAllInfo;
