import getComments from './getComments.js';
import postData from './postComments.js';

const popupDetails = document.querySelector('.popup-details');
const closePopup = document.getElementById('close-button-popup');

export default function showPopup(myMeal) {
  const html = `
      <img
        src="${myMeal.strMealThumb}"
        alt="${myMeal.strMeal}"
        class="modal-img"
      />
      <h2 class="popup-title">${myMeal.strMeal}</h2>
      <h3 class="popup-area">${myMeal.strArea}</h3>
      <p class="popup-instructions">${myMeal.strInstructions}</p>
  
      <!-- modal comments -->
      <div class="popup-comments">
        <h3 class="comments-conter">Comments ()</h3>
        <ul class="comments-box">
        
        </ul>
      </div>
  
      <!-- add comment -->
      <div class="add-comment-container">
        <h3 class="add-comment-title">Add Comment</h3>
        <form class="commnets-inputs" onsubmit="return false;">
          <input type="text" name="name" id="Name" placeholder="Your Name"/>
          <textarea
            name="insights"
            id="insights"
            class="your-insights"
            cols="30"
            rows="5"
            placeholder="Your insights"
          ></textarea>
          <button type="submit" id="add-comment-button" class="add-comment">
            Comment
          </button>
        </form>
      </div>
    `;

  popupDetails.innerHTML = html;
  popupDetails.parentElement.classList.add('showPopup');

  // Call getComments to fetch comments
  getComments();

  // Add comments
  const submitButton = document.querySelector('.add-comment');
  submitButton.addEventListener('click', postData);
  submitButton.addEventListener('click', getComments);
}

closePopup.addEventListener('click', () => {
  popupDetails.parentElement.classList.remove('showPopup');
});