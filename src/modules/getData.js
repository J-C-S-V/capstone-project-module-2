import displayItems from './displayItems.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const main = document.querySelector('.main');

// const userInput = document.querySelector('body');

let likes = 0;
export default async function getData() {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.meals.length; i += 1) {
        const myMeal = data.meals[i];

        main.innerHTML += `
      <div class="cards-container">
        <img
          class="img"
          src="${myMeal.strMealThumb}"
          alt="${myMeal.strMeal}"
        />
        <h2 class="title">${myMeal.strMeal}</h2>
        <span class="thumbs-up">👍</span>
        <p class="likes">${likes} likes</p>
        <div class="buttons">
          <button class="buttons__comments">comments</button>
          <button class="buttons__reservation">reservation</button>
        </div>
      </div>`;
      }
    });
  function updateLikes() {
    for (let likes = 0; likes < 100; likes += 1) {
      const likeButton = document.querySelectorAll('.thumbs-up');

      likeButton.forEach((element) => {
        element.addEventListener('click', updateLikes);
      });
    }
  }
}
