function displayTotalItems() {
  const elements = document.querySelectorAll('.thumbs-up');
  const liCount = document.querySelector('.list-Item-items');
  liCount.innerHTML = `(${elements.length} items)`;
  return elements.length;
}

export default displayTotalItems;
