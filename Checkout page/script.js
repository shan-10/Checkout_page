const form = document.querySelector('#checkout-form');
const nameInput = document.querySelector('#name');
const cardNumberInput = document.querySelector('#card-number');
const expDateInput = document.querySelector('#exp-date');
const cvvInput = document.querySelector('#cvv');
const addressInput = document.querySelector('#address');
const cityInput = document.querySelector('#city');
const stateInput = document.querySelector('#state');
const zipInput = document.querySelector('#zip');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validate form fields
  if (nameInput.value === '') {
    alert('Please enter a name.');
    return;
  }
  if (cardNumberInput.value === '' || isNaN(cardNumberInput.value)) {
    alert('Please enter a valid card number.');
    return;
  }
  if (expDateInput.value === '' || !expDateInput.value.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
    alert('Please enter a valid expiration date (MM/YY).');
    return;
  }
  if (cvvInput.value === '' || isNaN(cvvInput.value)) {
    alert('Please enter a valid CVV.');
    return;
  }
  if (addressInput.value === '') {
    alert('Please enter an address.');
    return;
  }
  if (cityInput.value === '') {
    alert('Please enter a city.');
    return;
  }
  if (stateInput.value === '') {
    alert('Please enter a state.');
    return;
  }
  if (zipInput.value === '' || isNaN(zipInput.value)) {
    alert('Please enter a valid zip code.');
    return;
  }

  // Submit the form
  alert('Your order has been placed. Thank you for your purchase!');
  form.reset();
});
