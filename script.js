document.querySelectorAll('.timeline-btn').forEach(button => {
  button.addEventListener('click', () => {
      const contentId = button.id.replace('btn', 'content');
      const contentDiv = document.getElementById(contentId);

      // Hide all other sections
      document.querySelectorAll('.timeline-content').forEach(div => {
          if (div !== contentDiv) {
              div.style.display = 'none';
          }
      });

      // Toggle visibility of the current section
      contentDiv.style.display = contentDiv.style.display === 'block' ? 'none' : 'block';

      // Toggle active class for the button
      button.classList.toggle('active');
  });
});

