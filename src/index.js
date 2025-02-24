// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const prices = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  const price = parseFloat(prices.innerText);

  let quantityValue = quantity.value;

  let pricesTotal = 0;

  if (quantityValue >= 1) {
    pricesTotal = quantityValue * price;
  }

  const subTotal = product.querySelector('.subtotal span');

  if (subTotal) {
    subTotal.innerText = pricesTotal.toFixed(2).toString();
  }

  return subTotal.innerText;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');

  let total = 0;

  allProducts.forEach((el) => {
    total += parseFloat(updateSubtotal(el));
  })

  const allTotal = document.querySelector('#total-value span')

  if (allTotal) {
    allTotal.innerText = total.toFixed(2).toString()
  }

  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  
  const product = target.closest('.product');

  if (product) {
    product.remove();
  }

  calculateAll();
}

window.onload = () => {
  const removeBtns = document.getElementsByClassName('btn btn-remove')
  
  Array.from(removeBtns).forEach((el) => el.onclick = removeProduct)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
