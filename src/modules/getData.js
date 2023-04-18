const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const main = document.querySelector('.main');

// const userInput = document.querySelector('body');

export default function getData() {
  fetch(url)
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
        <p class="likes">5 likes</p>
        <div class="buttons">
          <button class="buttons__comments">comments</button>
          <button class="buttons__reservation">reservation</button>
        </div>
      </div>`;
      }
    });
}

// for (let i = 0; i < data.meals.length; i += 1) {
//   const myMeal = data.meals[i];

//   main.append(myMeal.strMeal);

//   main.innerHTML = `      <div>
//   <img
//     class="img"
//     src="${myMeal.strMealThumb}"
//     alt="${myMeal.strMeal}"
//   />
//   <h2 class="title">${myMeal.strMeal}</h2>
// </div>`;
// }

// console.log(data.meals.length);
// console.log(data);
// console.log(myMeal);
// console.log(myMeal.strMealThumb);
// console.log(myMeal.strMeal);
// console.log(myMeal.strCategory);
