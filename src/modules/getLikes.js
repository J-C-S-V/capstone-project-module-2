// Updates the likes counter on the page
const getLikes = () => {
  const cards = document.querySelectorAll('.cards-container');
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/likes',
  )
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card) => {
        json.forEach((item) => {
          if (card.children[2].classList[1] === item.item_id) {
            card.children[3].innerHTML = `${item.likes} likes`;
          }
        });
      });
    });
};

export default getLikes;
