function displayTotalItems() {
  const elements = document.querySelectorAll('.thumbs-up');
  const liCount = document.querySelector('.list-Item-items');
  liCount.innerHTML = `(${elements.length} items)`;
  return elements.length;
}

export default displayTotalItems;

// function sum(a, b) {
//   return a + b;
// }
// export default sum;
