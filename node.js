function showPortfolio(category) {
    // Hide all portfolio sections
    document.querySelectorAll('.portfolio-section').forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the selected portfolio section
    document.getElementById(`${category}-portfolio`).style.display = 'block';
  }
  