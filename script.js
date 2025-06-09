// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Adjust for fixed headers if any
        behavior: 'smooth'
      });
    }
  });
});

// Create scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '0.5rem 1rem';
scrollBtn.style.fontSize = '1.5rem';
scrollBtn.style.backgroundColor = '#0077cc';
scrollBtn.style.color = 'white';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
scrollBtn.style.zIndex = '1000';
document.body.appendChild(scrollBtn);

// Show button after scrolling down 300px
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

// Scroll to top when button clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
