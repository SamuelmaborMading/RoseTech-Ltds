let currentIndex = 0;
  const slides = document.querySelectorAll('.container-one');
  const carousel = document.getElementById('carousel');
  const total = slides.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + total) % total;
    updateCarousel();
  }
  (function() {
    const now = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dateStr = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    document.querySelectorAll('.live-date').forEach(el => el.textContent = dateStr);
  })();
   const imageAreas = document.querySelectorAll('.card-image-area');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');

  imageAreas.forEach(area => {
    area.addEventListener('click', function(e) {
      const imgSrc = this.getAttribute('data-img');
      if (imgSrc) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add('active');
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
      if (!name || !email) {
        feedback.textContent = '❌ Please fill in name and email.';
        feedback.style.color = '#b91c1c';
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        feedback.textContent = '❌ Please enter a valid email address.';
        feedback.style.color = '#b91c1c';
        return;
      }
      feedback.textContent = '✓ Message sent! We’ll get back to you soon.';
      feedback.style.color = '#15803d';
      form.reset();
      setTimeout(() => {
        feedback.textContent = '';
      }, 4000);
    });