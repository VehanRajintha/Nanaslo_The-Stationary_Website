'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

// slider variables
const sliderContainer = document.getElementById('slider-container');
let scrollPosition = 0;
let scrollInterval;

function autoScroll() {
  scrollInterval = setInterval(() => {
    scrollPosition += 5; // adjust the scroll speed by changing this value
    sliderContainer.scrollLeft = scrollPosition;
    if (scrollPosition >= sliderContainer.scrollWidth - sliderContainer.offsetWidth) {
      scrollPosition = 0;
    }
  }, 20); // adjust the scroll interval by changing this value
}

autoScroll();

// Scroll reveal effect for.showcase elements
gsap.from('.showcase,.header-search-container,.desktop-navigation-menu,.slider-item,.sidebar-category,.containe,.product-main,.blog-card,.category-item,.title,.product-showcase', {
  scrollTrigger: {
    trigger: '.showcase',
    start: 'top 80%', // adjust the percentage to control the reveal point
    end: 'bottom 20%',
    toggleClass: 'eveal',
    markers: false, // add this option
    id: 'crollTrigger' // add this option
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: 'power2.inOut'
});

const buyBtn = document.querySelector('.buy-btn');

buyBtn.addEventListener('mouseover', () => {
  buyBtn.disabled = true;
  showPopupMessage('Unavailable right now');
});

buyBtn.addEventListener('click', () => {
  buyBtn.disabled = true;
  showPopupMessage('Unavailable right now');
});

function showPopupMessage(message) {
  const popupMessage = document.createElement('div');
  popupMessage.className = 'popup-message';
  popupMessage.textContent = message;
  document.body.appendChild(popupMessage);
  popupMessage.classList.add('show');
  setTimeout(() => {
    popupMessage.classList.remove('show');
    document.body.removeChild(popupMessage);
  }, 2000); // hide the popup after 2 seconds
}