const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm');
const container = document.querySelector('.container');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting
  validateForm();
});

function validateForm() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const confirm = confirmInput.value;

  // Name
  if (name === '') {
    showError(nameInput, 'Name is required');
  } else {
    showSuccess(nameInput);
  }

  // Email
  if (email === '') {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(email)) {
    showError(emailInput, 'Enter a valid email');
  } else {
    showSuccess(emailInput);
  }

  // Phone
  if (phone !== '' && !isValidPhone(phone)) {
    showError(phoneInput, 'Enter a valid 10-digit phone number');
  } else {
    showSuccess(phoneInput);
  }

  // Password
  if (password.length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
  } else {
    showSuccess(passwordInput);
  }

  // Confirm Password
  if (confirm !== password) {
    showError(confirmInput, 'Password does not match');
  } else {
    showSuccess(confirmInput);
  }

    const successMessage = document.getElementById('success-message');
  if (isValid) {
    successMessage.style.display = 'block';

    // Optional: clear the form
    form.reset();

    // Remove green borders
    document.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('success');
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  } else {
    successMessage.style.display = 'none';
  }
}
  


function isValid() {
  const inputs = [nameInput, emailInput, phoneInput, passwordInput, confirmInput];
  return inputs.every(input => input.parentElement.classList.contains('success'));
}

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('success');
  formGroup.classList.add('error');
  formGroup.querySelector('small').innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
  formGroup.classList.add('success');
  formGroup.querySelector('small').innerText = '';
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}
