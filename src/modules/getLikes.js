const getLikes = () => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/likes'
  )
    .then((response) => response.json())
    .then((json) => {
      const parentElement = document.querySelector('.main');
      parentElement.addEventListener('click', (e) => {
        if (e.target.classList[1] === json.item_id) {
          console.log('getlasdfikes.js', e.target.classList[1]);
          // const id = e.target.classList[1];
        } else {
          console.log('getlikes.js', 'no match');
        }
      });
    });
};

//       // console.log('getlikesjs', json));

export default getLikes;
