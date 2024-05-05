// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = {
      name: button.previousElementSibling.previousElementSibling.textContent,
      price: parseFloat(button.previousElementSibling.textContent.slice(3))
    };
    cartItems.push(item);
    alert(`${item.name} has been added to your cart.`);
  });
});

// Display cart items
const orderNowButton = document.querySelector('.hero button');
orderNowButton.addEventListener('click', () => {
  if (cartItems.length === 0) {
    alert('Your cart is empty. Please add some items to your cart first.');
  } else {
    let cartTotal = 0;
    let cartItemsHTML = '';
    cartItems.forEach(item => {
      cartItemsHTML += `${item.name} - Rs.${item.price.toFixed(2)}`;
      cartTotal += item.price;
    });
    alert(`Your cart items:\n\n${cartItemsHTML}\n\nTotal: Rs.${cartTotal.toFixed(2)}`);
  }
});

const popupTrigger = document.querySelector('.popup-trigger');
const popupOverlay = document.querySelector('.popup-overlay');
const popupClose = document.querySelector('.popup-close');

popupTrigger.addEventListener('click', () => {
  popupOverlay.style.display = 'block';
});

popupClose.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});

