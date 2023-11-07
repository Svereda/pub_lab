import React, { useState } from 'react';
import './style_pages.css';
import pab_logo_1 from '../image/pub_logo_1.png';
import { Link } from 'react-router-dom';

function Pubs() {
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [staticPubs] = useState([
    // Define your static pubs here
    {
      name: 'Добрий Друг',
      phoneNumber: '+(380)537-12-46',
      city: 'м.Львів', // Static city value
      address: 'вул. Лесі Українки, 19',
      description: 'паб відомий завдяки великому вибору крафтового пива на різний смак, сидрів та смачних страв...',
    },
    // Add more static pubs as needed
  ]);

  const [newPubs, setNewPubs] = useState([]);
  const [newPubInfo, setNewPubInfo] = useState({
    name: '',
    phoneNumber: '',
    city: '', // Dynamic city for new pubs
    address: '',
    description: '',
  });

  const handleAddPub = () => {
    setNewPubs([...newPubs, newPubInfo]);
    setNewPubInfo({
      name: '',
      phoneNumber: '',
      city: '', // Reset the dynamic city for the next pub
      address: '',
      description: '',
    });
    setAddFormVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPubInfo({ ...newPubInfo, [name]: value });
  };

  return (
    <div className="aaa">
      {isAddFormVisible ? (
        <div className="add-pub-form" style={{ backgroundColor: '#212529' }}>
          <h2>Додати паб</h2>
          <form onSubmit={handleAddPub}>
            <div>
              <label>Назва:</label>
              <input
                type="text"
                className='custom-input'
                name="name"
                value={newPubInfo.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Номер телефону:</label>
              <input
                type="text"
                className='custom-input'
                name="phoneNumber"
                value={newPubInfo.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Місто:</label>
              <input
                type="text"
                className='custom-input'
                name="city"
                value={newPubInfo.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Адреса:</label>
              <input
                type="text"
                className='custom-input'
                name="address"
                value={newPubInfo.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Опис:</label>
              <textarea
                name="description"
                value={newPubInfo.description}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="center-button">Підтвердити</button>
          </form>
        </div>
      ) : (
        <button onClick={() => setAddFormVisible(true)} className="center-button">Добавити паб</button>
      )}
      <div className="center-item">
        {staticPubs.map((pub, index) => (
          <Link to={`/pub_all_info/${index}`} key={index}>
            <div className="pub_info">
              <img className="pub_logo" src={pab_logo_1} alt="Це опис зображення" />
              <div className="pub_info_t">
                <div className="pub_name">{pub.name}</div>
                <div className="pub_text">{pub.phoneNumber}, {pub.city}, вул. {pub.address}</div>
                <div className="pub_short_info">{pub.description}</div>
              </div>
            </div>
          </Link>
        ))}
        {newPubs.map((pub, index) => (
          <Link to={`/pub_all_info/${staticPubs.length + index}`} key={index}>
            <div className="pub_info">
              <img className="pub_logo" src={pab_logo_1} alt="Це опис зображення" />
              <div className="pub_info_t">
                <div className="pub_name">{pub.name}</div>
                <div className="pub_text">{pub.phoneNumber}, {pub.city}, вул. {pub.address}</div>
                <div className="pub_short_info">{pub.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Pubs;
