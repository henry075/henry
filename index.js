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
    const cartItemsTableBody = document.getElementById('cart-items-body');
    const cartTotalSpan = document.getElementById('cart-total');
    const cartIconCount = document.getElementById('cart-icon-count');

    cartItemsTableBody.innerHTML = '';
    cartIconCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);

    cart.forEach(item => {
        const cartItemRow = document.createElement('tr');
        cartItemRow.innerHTML = `
            <td style="color: #333;">${item.product}</td>
            <td style="color: #28a745;">$${item.price.toFixed(2)}</td>
            <td style="color: #333;">${item.quantity}</td>
        `;
        cartItemsTableBody.appendChild(cartItemRow);
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
      
      function validateEmail() {
        var emailInput = document.getElementById('email');
        var email = emailInput.value.trim();
  
        if (isValidEmail(email)) {
          alert('Email is valid. Redirect to the next step.');
          // Add your redirection logic here
        } else {
          alert('Please enter a valid email address.');
        }
      }
  
      function isValidEmail(email) {
        // Add your email validation logic here
        // For a simple example, checking if it contains @ and .
        return email.includes('@') && email.includes('.');
      }

      // Add this function to show product details
function showDetails(title, description, price) {
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalPrice = document.getElementById('modal-price');

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalPrice.textContent = `Price: $${price.toFixed(2)}`;

  const detailsModal = document.getElementById('details-modal');
  detailsModal.style.display = 'block';

  const modalOverlay = document.querySelector('.modal-overlay');
  modalOverlay.style.display = 'block';

  // Close (x) button functionality
  const closeButton = document.querySelector('.close-btn');

  function closeDetailsModal() {
    detailsModal.style.display = 'none';
    modalOverlay.style.display = 'none';
  }

  closeButton.addEventListener('click', closeDetailsModal);
}


// Modify addToCart function to handle details and cart separately
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
