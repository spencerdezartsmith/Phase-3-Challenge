document.addEventListener('DOMContentLoaded', () => {
  let total = 0.00
  let itemCount = 0

  const modal = document.querySelector('#modal')
  const overlay = document.querySelector('#modal-overlay')
  const cartList = document.querySelector('.cart-list')

  function setItemCount(elem) {
    document.querySelector('#cart-item-count').textContent = `(${itemCount})`
  }

  function setCartTotal(elem) {
    document.querySelector('.total-amount').textContent = `$${total.toFixed(2)}`
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
      setCartTotal()
      setItemCount()
    } else if (selected.className === 'clear-btn') {
      total = 0.00
      itemCount = 0
      setCartTotal()
      setItemCount()
      clearCartItems(cartList)
    } else if (selected.id === 'close-btn') {
      closeCart(modal, overlay)
    } else if (selected.id === 'cart-btn') {
      openCart(modal, overlay)
    } else if (selected.textContent === 'Produce' || 'Deli' || 'Frozen') {
      location.href = `#${selected.textContent}`
    }
  })
})
