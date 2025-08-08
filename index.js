 // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }); // <-- Properly close the scroll event listener here

       // ===== MODERN 3-LINE HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
if(mobileMenu && navLinks){
    // Hamburger menu code here
}


if (mobileMenu && navLinks) {
  // Existing hamburger menu code
}


    // Debug: Check if elements exist
    console.log('Mobile menu:', mobileMenu);
    console.log('Nav links:', navLinks);

    if (mobileMenu && navLinks) {
        // Toggle nav and menu on click
        mobileMenu.addEventListener('click', function () {
            console.log('Mobile menu clicked'); // Debug log
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // for hamburger animation
        });

        // Close menu when clicking any nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Close menu if clicked outside
        document.addEventListener('click', function (e) {
            if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        // Close menu if screen is resized to desktop
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
});


    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            
            const inc = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        // Start counting when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
const sliderTrack = document.querySelector('.about-img-track');
const slides = document.querySelectorAll('.about-img-track .slide');
const section = document.querySelector('.about');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let aboutCurrentSlide = 0;
let autoSlideInterval;

// Function to update slide position and colors
function updateSlide() {
  const slideWidth = slides[0].clientWidth;
  sliderTrack.style.transform = `translateX(-${slideWidth * aboutCurrentSlide}px)`;

  const current = slides[aboutCurrentSlide];
  section.style.background = current.dataset.bg;
  section.style.color = current.dataset.text;
}

// Manual slide navigation
nextBtn.addEventListener('click', () => {
  aboutCurrentSlide = (aboutCurrentSlide + 1) % slides.length;
  updateSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  aboutCurrentSlide = (aboutCurrentSlide - 1 + slides.length) % slides.length;
  updateSlide();
  resetAutoSlide();
});

// Auto-slide every 3 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    aboutCurrentSlide = (aboutCurrentSlide + 1) % slides.length;
    updateSlide();
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Pause auto-scroll on hover
sliderTrack.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
sliderTrack.addEventListener('mouseleave', startAutoSlide);

// Run on page load
window.addEventListener('load', () => {
  updateSlide();
  startAutoSlide();
});

// ---------------- Popup Logic ----------------
document.querySelectorAll('.achievement-badge').forEach(badge => {
  badge.addEventListener('click', () => {
    const popupId = badge.getAttribute('data-popup');
    const popup = document.getElementById(popupId);
    const overlay = document.querySelector('.popup-overlay');

    if (popup && overlay) {
      popup.classList.add('show');
      overlay.style.display = 'block';
    }
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const popup = btn.closest('.achievement-popup');
    popup.classList.remove('show');
    document.querySelector('.popup-overlay').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  document.querySelectorAll('.achievement-popup').forEach(popup => {
    if (e.target.classList.contains('popup-overlay')) {
      popup.classList.remove('show');
      e.target.style.display = 'none';
    }
  });
});


        // =============================
// Testimonial Auto Slider Logic
// =============================

// Optional Auto-scroll (carousel-like effect)
const testimonialTrack = document.querySelector('.testimonial-slider-track');

let scrollAmount = 0;
let scrollStep = 1;

function autoScrollTestimonials() {
  scrollAmount += scrollStep;
  testimonialTrack.scrollLeft = scrollAmount;

  // Reset if at end
  if (
    testimonialTrack.scrollLeft + testimonialTrack.clientWidth >=
    testimonialTrack.scrollWidth
  ) {
    scrollAmount = 0;
  }

  requestAnimationFrame(autoScrollTestimonials);
}

// Enable only if you want auto animation
// autoScrollTestimonials();

        // Achievement popup modern effect
document.querySelectorAll('.achievement-card').forEach(card => {
  card.addEventListener('click', () => {
    const targetId = card.dataset.target;
    document.getElementById(`popup-${targetId}`).style.display = 'block';
    document.body.classList.add('popup-active');
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.achievement-popup').style.display = 'none';
    document.body.classList.remove('popup-active');
  });
});

window.addEventListener('click', (e) => {
  document.querySelectorAll('.achievement-popup').forEach(popup => {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.classList.remove('popup-active');
    }
  });
});

// GALLERY LIGHTBOX VIEW
const galleryImgs = document.querySelectorAll('.gallery-img');
const galleryLightbox = document.getElementById('lightbox');
const galleryLightboxImg = document.querySelector('.lightbox-img');
const galleryCloseLightbox = document.querySelector('.close-lightbox');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    galleryLightbox.style.display = 'flex';
    galleryLightboxImg.src = img.src;
  });
});

galleryCloseLightbox.addEventListener('click', () => {
  galleryLightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === galleryLightbox) galleryLightbox.style.display = 'none';
});



//galary jss script

  window.onload = function () {
    const slides = document.querySelectorAll(".gallery-slide");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    function nextGallery() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevGallery() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    // Attach to buttons
    document.querySelector(".nav-btn.next").addEventListener("click", nextGallery);
    document.querySelector(".nav-btn.prev").addEventListener("click", prevGallery);

    // Auto-slide every 6 seconds
    setInterval(nextGallery, 6000);

    // Show the first slide on load
    showSlide(currentSlide);
  };


 







// Stats Counter Animation
// (Removed duplicate block to avoid redeclaration error)
