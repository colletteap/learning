// Get all the navbar links
const navbarLinks = document.querySelectorAll('.navbar-links a');

// Add click event listener to each navbar link
navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    
    // Get the target section's ID from the link's href attribute
    const targetId = link.getAttribute('href');
    
    // Find the corresponding section using the target ID
    const targetSection = document.querySelector(targetId);
    
    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
