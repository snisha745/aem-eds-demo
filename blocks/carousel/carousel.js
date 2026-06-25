export default function decorate(block) {
  // Get all slides
  const slides = [...block.children];
  
  // Create carousel structure
  const carouselContainer = document.createElement('div');
  carouselContainer.className = 'carousel-container';
  
  const slidesWrapper = document.createElement('div');
  slidesWrapper.className = 'carousel-slides';
  
  // Create navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML = '&#10094;';
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML = '&#10095;';
  
  // Create indicators
  const indicators = document.createElement('div');
  indicators.className = 'carousel-indicators';
  
  // Process slides
  slides.forEach((slide, index) => {
    slide.classList.add('carousel-slide');
    if (index === 0) slide.classList.add('active');
    slidesWrapper.appendChild(slide);
    
    // Create indicator
    const indicator = document.createElement('button');
    indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    indicators.appendChild(indicator);
  });
  
  let currentIndex = 0;
  
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
    
    [...indicators.children].forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  }
  
  function goToSlide(index) {
    currentIndex = index;
    updateSlides();
  }
  
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  // Auto-advance slides every 5 seconds
  setInterval(nextSlide, 5000);
  
  // Assemble carousel
  carouselContainer.appendChild(prevBtn);
  carouselContainer.appendChild(slidesWrapper);
  carouselContainer.appendChild(nextBtn);
  carouselContainer.appendChild(indicators);
  
  block.replaceChildren(carouselContainer);
}
