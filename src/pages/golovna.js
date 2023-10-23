import React, { Component } from 'react';
import './style_pages.css';
import pab1 from './pab1.jpg';
import pab2 from './pab2.jpg';
import pab3 from './pab3.jpg';

class Golovna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  componentDidMount() {
    this.showSlides();
  }

  showSlides = () => {
    const { slideIndex } = this.state;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    const newIndex = (slideIndex + 1) % slides.length;

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[newIndex].style.display = "block";
    dots[newIndex].className += " active";

    this.setState({
      slideIndex: newIndex
    });

    this.timerID = setTimeout(this.showSlides, 8000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  render() {
    return (
      <div className='aaa'>
        <div className='back'>
        </div>
        <div className='center-item'>
          <div className='slideshow-container'>
            <div className='mySlides fade'>
              <img className='logo1' src={pab1} alt='Slide 1' />
            </div>
            <div className='mySlides fade'>
              <img className='logo1' src={pab2} alt='Slide 2' />
            </div>
            <div className='mySlides fade'>
              <img className='logo1' src={pab3} alt='Slide 3' />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className='dot' onClick={() => this.currentSlide(1)}></span>
            <span className='dot' onClick={() => this.currentSlide(2)}></span>
            <span className='dot' onClick={() => this.currentSlide(3)}></span>
          </div>
        </div>
        <div className='text1'>
          Вас вітає Dovidka.io
        </div>
        <div className="poshyk">
          <div className="wrap">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="Пошук..." />
              <button type="submit" className="searchButton">
                go
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className='borders'>
          <div className="col-container">
            <div className="col">
              <h2>Instagram</h2>
              <a href="https://www.instagram.com/kresko.o/" class="fa fa-instagram"></a>
              
            </div>

            <div className="col">
              <h2>Facebook</h2>
              <a href="https://www.facebook.com/profile.php?id=100011292553694" class="fa fa-facebook"></a>
              
            </div>

            <div className="col">
              <h2>YouTube</h2>
              <a href="https://www.youtube.com/channel/UCob5fmxZgQhBY82EoOoWSOw" class="fa fa-youtube"></a>
              
            </div>
          </div>

        </div>
      </div>


      
      
    );
  }
}

export default Golovna;
