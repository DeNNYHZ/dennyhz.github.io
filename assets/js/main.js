// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle
    const navToggle = document.querySelector('.header--nav-toggle');
    const sideNav = document.querySelector('.l-side-nav');
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.l-section');
    const mainContent = document.querySelectorAll('.main-content > li');
    const ctaButtons = document.querySelectorAll('.cta');
    
    navToggle.addEventListener('click', function() {
      sideNav.classList.toggle('side-nav--is-visible');
      container.classList.toggle('container--nav-is-visible');
    });
  
    // Navigation through sections
    sideNav.querySelectorAll('li').forEach((navItem, index) => {
      navItem.addEventListener('click', function() {
        // Remove active class from all sections and nav items
        sections.forEach(section => section.classList.remove('section--is-active'));
        sideNav.querySelectorAll('li').forEach(item => item.classList.remove('is-active'));
  
        // Add active class to the clicked nav item and corresponding section
        this.classList.add('is-active');
        sections[index].classList.add('section--is-active');
      });
    });
  
    // Scroll to Contact section on CTA button click
    ctaButtons.forEach(button => {
      button.addEventListener('click', function() {
        sections.forEach(section => section.classList.remove('section--is-active'));
        sideNav.querySelectorAll('li').forEach(item => item.classList.remove('is-active'));
  
        sideNav.querySelectorAll('li')[3].classList.add('is-active'); // Contact
        sections[3].classList.add('section--is-active'); // Contact
      });
    });
  
    // Slider functionality
    const sliderItems = document.querySelectorAll('.slider--item');
    let currentSliderItem = 1; // Center item
  
    function updateSlider() {
      sliderItems.forEach((item, index) => {
        item.classList.remove('slider--item-left', 'slider--item-center', 'slider--item-right');
        if (index === currentSliderItem - 1) {
          item.classList.add('slider--item-left');
        } else if (index === currentSliderItem) {
          item.classList.add('slider--item-center');
        } else if (index === currentSliderItem + 1) {
          item.classList.add('slider--item-right');
        }
      });
    }
  
    document.querySelector('.slider--prev').addEventListener('click', function() {
      currentSliderItem = (currentSliderItem - 1 + sliderItems.length) % sliderItems.length;
      updateSlider();
    });
  
    document.querySelector('.slider--next').addEventListener('click', function() {
      currentSliderItem = (currentSliderItem + 1) % sliderItems.length;
      updateSlider();
    });
  
    updateSlider();
  });
  