// JavaScript for project filter
document.getElementById('project-filter').addEventListener('change', function() {
  const filter = this.value;
  const projects = document.querySelectorAll('#projects .project');

  projects.forEach(function(project) {
    if (filter === 'all' || project.getAttribute('data-category') === filter) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
});
// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// JavaScript for skill bars animation
window.addEventListener('scroll', function() {
  document.querySelectorAll('.skill-bar').forEach(function(bar) {
    const skill = bar.getAttribute('data-skill');
    const barWidth = (skill + '%');
    const rect = bar.getBoundingClientRect();
    
    if (window.scrollY + window.innerHeight > rect.top) {
      bar.querySelector('::before').style.width = barWidth;
    }
  });
});
// JavaScript for lightbox functionality
document.querySelectorAll('.project-image').forEach(image => {
  image.addEventListener('click', function() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = this.src;
    lightbox.style.display = 'flex';
  });
});

document.querySelector('.lightbox').addEventListener('click', function() {
  this.style.display = 'none';
});
