// @@@@@@@@@@@@@@@@@ show & remove menu @@@@@@@@@@@@@@@@@@@
const navtoggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navMenu = document.getElementById('nav-menu');

navtoggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// When we click on each nav__link, we remove the show-menu class
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', linkActive);
});

function linkActive() {
  navMenu.classList.remove('show-menu');
}

// @@@@@@@@@@@@@@@@@ CHANGE BACKGROUND HEADER  @@@@@@@@@@@@@@@@@@@
//  When the scroll is greater than 100 viewport height,
//  add the scroll-header class to the header tag
const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 100) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// @@@@@@@@@@@@@@@@@ SCROLL SECTIONS ACTIVE LINK @@@@@@@@@@@@@@@@@@@

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}

// @@@@@@@@@@@@@@@ swiperjs.com (Effect coverflow) @@@@@@@@@@@@@@@@@
var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 10,
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// @@@@@@@@@@@@@@@@@@@ video @@@@@@@@@@@@@@@@@@@@
const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon');

videoButton.addEventListener('click', playPause);

function playPause() {
  if (videoFile.paused) {
    videoFile.play();
    videoIcon.classList.add('bx-pause');
    videoIcon.classList.remove('bx-play');
  } else {
    videoFile.pause();
    videoIcon.classList.add('bx-play');
    videoIcon.classList.remove('bx-pause');
  }
}

// when the video ends
videoFile.addEventListener('ended', finalVideo);

function finalVideo() {
  videoIcon.classList.add('bx-play');
  videoIcon.classList.remove('bx-pause');
}

// @@@@@@@@@@@@@@@@@@@ scroll up @@@@@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollUp);
function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class

  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}
