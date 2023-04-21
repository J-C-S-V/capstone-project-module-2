function displayTotalComments() {
  const elements = document.querySelectorAll('.comments-box li');
  const counterComments = document.querySelector('.comments-conter');
  counterComments.innerHTML = `<h3 class="comments-conter">Comments (${elements.length})</h3>`;
  return elements.length;
}

export default displayTotalComments;