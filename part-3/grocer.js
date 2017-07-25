document.addEventListener('DOMContentLoaded', () => {
  // Jump to section
  const sections = document.querySelector('.section-list')
  sections.addEventListener('click', (event) => {
    window.location.hash = event.target.textContent
  })

  
})
