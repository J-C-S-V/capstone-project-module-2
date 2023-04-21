import showPopup from './showpopup.js';
import getLikes from './getLikes.js';
import displayTotalItems from './displayTotalItems.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const main = document.querySelector('.main');
const likes = 0;

// Get data from theMealDB API
const getData = async () => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log('primero :v');
      // for (let i = 0; i < 3; i += 1) {
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
          <span class="thumbs-up ${myMeal.idMeal}">👍</span>
          <p class="likes">${likes} likes</p>
          <div class="buttons">
            <button class="buttons__comments">comments</button>
            <button class="buttons__reservation">reservation</button>
          </div>
        `;

        const commentsButton = card.querySelector('.buttons__comments');
        commentsButton.addEventListener('click', () => {
          showPopup(myMeal);
        });

        // let targetId;

        // const commentsButton = document.querySelector('.buttons__comments');
        // commentsButton.addEventListener('click', (e) => {
        //   // console.log(e.target.parentNode.parentNode.children[2].classList[1]);
        //   targetId = e.target.parentNode.parentNode.children[2].classList[1];
        //   console.log(targetId);
        //   // console.log('lol');
        // });

        main.appendChild(card);
      }
    });

  getLikes();
  displayTotalItems();
};

export default getData;