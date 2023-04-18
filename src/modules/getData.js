const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const userInput = document.querySelector('body');

export default function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const myMeal = data.meals[0];
      console.log(data);
      console.log(myMeal);
      console.log(myMeal.strMealThumb);
      console.log(myMeal.strMeal);
      console.log(myMeal.strCategory);
      userInput.innerHTML = `<img src="${myMeal.strMealThumb}" alt="${myMeal.strMeal}">`;
      userInput.innerHTML = `      <div>
      <img
        class="img"
        src="${myMeal.strMealThumb}"
        alt="${myMeal.strMeal}"
      />
    </div>`;
    });
}
