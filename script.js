document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
  
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.querySelector('i').classList.toggle('fa-times');
});


const links = document.querySelectorAll('nav ul li a, .btn-primary');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 50, 
      behavior: 'smooth'
    });
    
    
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle.querySelector('i').classList.remove('fa-times');
    }
  });
});