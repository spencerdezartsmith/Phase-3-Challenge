document.addEventListener('DOMContentLoaded', () => {

  // Jump to section
  const sections = document.querySelector('.section-list')
  sections.addEventListener('click', (event) => {
    window.location.hash = event.target.textContent
  })

  // Open and close modal
  const modal = document.getElementById('modal')
  const overlay = document.getElementById('modal-overlay')
  const closeBtn = document.getElementById('close-btn')
  const cartBtn = document.querySelector('#cart-button')
  // Open
  cartBtn.addEventListener('click', () => {
	  modal.classList.remove('modal-close')
	  overlay.classList.remove('modal-close')
  })
  // close
  closeBtn.addEventListener('click', () => {
	  overlay.classList.add('modal-close')
	  modal.classList.add('modal-close')
  })

})
