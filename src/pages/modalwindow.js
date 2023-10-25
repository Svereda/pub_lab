import React, { useState } from 'react';
import Modal from 'react-modal';
import './style_pages.css';
const CommentModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Модальне вікно коментарів"
    >
      <div className='pub_info'>
      <h2 >Коментарі</h2>
      {/* Додайте сюди форму для коментарів або список коментарів */}
      <button className='open_com' onClick={onRequestClose}>Закрити</button>
      </div>
    </Modal>
  );
};

export default CommentModal;
