import React from 'react';
import './style_pages.css';
import pab1 from './pab1.jpg';
import pab2 from './pab2.jpg';
import pab3 from './pab3.jpg';

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}




function Golovna() {
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
      <div className='poshyk'>
        
      </div>

    </div>


  );
}

export default Golovna;