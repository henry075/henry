let cart = [];
  let total = 0;

  function addToCart(product, price) {
    const existingItem = cart.find(item => item.product === product);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ product, price, quantity: 1 });
    }

    total += price;

    updateCartUI();
  }

  
  function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const cartIconCount = document.getElementById('cart-icon-count');

    cartItemsDiv.innerHTML = '';
    cartIconCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);

    cart.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      cartItemDiv.innerHTML = `
        <span style="color: #333;">${item.product} x ${item.quantity}</span>
        <span style="color: #28a745;">$${(item.price * item.quantity).toFixed(2)}</span>
      `;
      cartItemsDiv.appendChild(cartItemDiv);
    });

    cartTotalSpan.textContent = total.toFixed(2);
  }

  function toggleCart() {
    const cartDetails = document.getElementById('cart-details');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (cart.length > 0) {
      cartDetails.style.display = 'block';
      modalOverlay.style.display = 'block';
    } else {
      cartDetails.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  }

  function hideDetails() {
    const modalOverlay = document.querySelector('.modal-overlay');
    const detailsModal = document.getElementById('details-modal');

    modalOverlay.style.display = 'none';
    detailsModal.style.display = 'none';
  }

  function backToMain() {
    const cartDetails = document.getElementById('cart-details');
    const modalOverlay = document.querySelector('.modal-overlay');

    cartDetails.style.display = 'none';
    modalOverlay.style.display = 'none';
  }

  function pay() {
        // Implement the payment logic here
        alert('Payment Successful! Thank you for shopping.');
        // You can clear the cart or redirect to another page after payment
        clearCart();
        toggleCart();
    }

    function clearCart() {
        cart = [];
        total = 0;
        updateCartUI();
    }

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = (navLinks.style.display === 'block' || navLinks.style.display === '') ? 'none' : 'block';
      }

      function openWhatsApp() {
        // Replace 'your_phone_number' with your actual phone number
        window.open('https://wa.me/0750839527', '_blank');
      }
      