document.addEventListener('DOMContentLoaded', () => {
  let total = 0.00
  let itemCount = 0
  const cartList = document.querySelector('.cart-list')
  const modal = document.querySelector('#modal')
  const overlay = document.querySelector('#modal-overlay')

  function setItemCount() {
    document.querySelector('#cart-item-count').textContent = `(${itemCount})`
  }

  function setCartTotal() {
    document.querySelector('.total-amount').textContent = `$${total}`
  }

  function createListItem(ul, name, price) {
    let li = document.createElement('li')
    li.setAttribute('class', 'cart-list-item')
    li.innerHTML = `<span>${name}</span><span>$${price}</span>`
    ul.appendChild(li)
  }

  function clearCart(ul) {
    while (ul.firstChild) {
      ul.removeChild( ul.firstChild )
    }
  }

  function openModal(modal, overlay) {
    modal.classList.remove('modal-close')
    overlay.classList.remove('modal-close')
  }

  function closeModal(modal, overlay) {
    modal.classList.add('modal-close')
    overlay.classList.add('modal-close')
  }

  // Listen for events
  document.querySelector('body').addEventListener('click', function(event) {
    const selected = event.target
    if (selected.textContent === 'Cart(40)') {
      console.log(true)
    }
  })







 // Set up a total
 // Set up a count variable
 // Set up the list string for new elements added
 // Add event listener to page
  // if its the cart button
   // open modal
  // if its close button
    // close modal
  // if clear
    //remove all the li's
  // if add to cart
   // create new li element function
})
