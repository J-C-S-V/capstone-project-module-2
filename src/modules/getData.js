const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const main = document.querySelector('.main');
const popupDetails = document.querySelector('.popup-details');
const closePopup = document.getElementById('close-button-popup');

function showPopup(myMeal) {
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
      <h3 class="comments-conter">Comments (2)</h3>
      <ul class="comments-box">
        <li class="comments">coment 1</li>
        <li class="comments">coment 2</li>
      </ul>
    </div>

    <!-- add comment -->
    <div class="add-comment-container">
      <h3 class="add-comment-title">Add Comment</h3>
      <form action="#" method="post" class="commnets-inputs">
        <input type="text" name="name" id="Name" placeholder="Your Name" />
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
}

export default function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.meals.length; i += 1) {
        const myMeal = data.meals[i];

        const card = document.createElement('div');
        card.classList.add('cards-container');
        card.innerHTML = `
          <img
            class="img"
            src="${myMeal.strMealThumb}"
            alt="${myMeal.strMeal}"
          />
          <h2 class="title">${myMeal.strMeal}</h2>
          <span class="thumbs-up">👍</span>
          <p class="likes">5 likes</p>
          <div class="buttons">
            <button class="buttons__comments">comments</button>
            <button class="buttons__reservation">reservation</button>
          </div>
        `;

        const commentsButton = card.querySelector('.buttons__comments');
        commentsButton.addEventListener('click', () => {
          showPopup(myMeal);
        });

        main.appendChild(card);
      }
    });
}

// Event listener
closePopup.addEventListener('click', () => {
  popupDetails.parentElement.classList.remove('showPopup');
});
