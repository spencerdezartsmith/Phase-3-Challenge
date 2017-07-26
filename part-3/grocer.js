document.addEventListener('DOMContentLoaded', () => {
  let total = 0.00
  let itemCount = 0
  const cartList = document.querySelector('.cart-list')
  const modal = document.querySelector('#modal')
  const overlay = document.querySelector('#modal-overlay')
  const cartCount = document.querySelector('#cart-item-count')
  const totalElem = document.querySelector('.total-amount')

  function setItemCount(elem) {
    elem.textContent = `(${itemCount})`
  }

  function setCartTotal(elem) {
    elem.textContent = `$${total.toFixed(2)}`
  }

  function createNewCartItem(ul, name, price) {
    let li = document.createElement('li')
    li.setAttribute('class', 'cart-list-item')
    li.innerHTML = `<span>${name}</span><span>$${price}</span>`
    ul.appendChild(li)
  }

  function clearCartItems(ul) {
    while (ul.firstChild) {
      ul.removeChild( ul.firstChild )
    }
  }

  function openCart(modal, overlay) {
    modal.classList.remove('modal-close')
    overlay.classList.remove('modal-close')
  }

  function closeCart(modal, overlay) {
    modal.classList.add('modal-close')
    overlay.classList.add('modal-close')
  }

  // Listen for events
  document.querySelector('body').addEventListener('click', function(event) {
    const selected = event.target

    if (selected.className === 'add-button') {
      const itemName = selected.parentElement.firstElementChild.textContent
      const price = Number(selected.previousElementSibling.textContent.slice(1))
      total += price
      itemCount += 1
      createNewCartItem(cartList, itemName, price)
      setCartTotal(totalElem)
      setItemCount(cartCount)
    } else if (selected.className === 'clear-btn') {
      total = 0.00
      itemCount = 0
      setCartTotal(totalElem)
      setItemCount(cartCount)
      clearCartItems(cartList)
    } else if (selected.id === 'close-btn') {
      closeCart(modal, overlay)
    } else if (selected.id === 'cart-btn') {
      openCart(modal, overlay)
    } else if (selected.textContent === 'Produce' || 'Deli' || 'Frozen') {
      location.href = `#${selected.textContent}`
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
