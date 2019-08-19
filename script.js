function Slider(slider){
  this.currentSlide = 0;
  this.slider = document.querySelector(slider);
  this.slides = this.slider.querySelectorAll('.slider__slide');
  this.dotsParent = this.slider.querySelector('.dots');
  this.dots = this.slider.querySelector('.dots').children;
  this.prevButton = this.slider.querySelector('.slider__button-prev');
  this.nextButton = this.slider.querySelector('.slider__button-next');
  this.time = null;

  this.changeSlide(this.currentSlide);

  this.dotsParent.addEventListener('click', e => {
    if(e.target.classList.contains('dots__dot')){
      this.changeSlide(Array.from(this.dots).indexOf(e.target));
    }
  });

  this.prevButton.addEventListener('click', () => {
    this.prevSlide();
  });

  this.nextButton.addEventListener('click', () => {
    this.nextSlide();
  });
}

Slider.prototype.nextSlide = function(){
  this.currentSlide++;
  if (this.currentSlide >= this.dots.length){
    this.currentSlide = 0;
  }
  this.changeSlide(this.currentSlide);
}

Slider.prototype.prevSlide = function(){
  this.currentSlide--;
  if (this.currentSlide < 0){
    this.currentSlide = this.dots.length - 1;
  }
  this.changeSlide(this.currentSlide);
}

Slider.prototype.changeSlide = function(index){
  [...this.slides].forEach(function(slide){
    slide.classList.remove('slider__slide--active');
  });
  this.slides[index].classList.add('slider__slide--active');

  [...this.dots].forEach(function(dot){
    dot.classList.remove('dots__dot--active');
  });
  this.dots[index].classList.add('dots__dot--active');

  this.currentSlide = index;

  clearInterval(this.time)
  this.time = setTimeout(() => {
    this.nextSlide();
  }, 5000);
}

const slider1 = new Slider('.slider--bg1');
const slider2 = new Slider('.slider--bg2');
