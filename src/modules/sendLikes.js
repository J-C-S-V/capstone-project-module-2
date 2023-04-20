import getLikes from './getLikes.js';

const sendLikes = async () => {
  const parentElement = document.querySelector('.main');
  parentElement.addEventListener('click', async (e) => {
    if (e.target.classList.contains('thumbs-up')) {
      console.log('sendlikesjs', e.target.classList[1]);
      const id = e.target.classList[1];
      await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/likes',
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: id,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
    }
    getLikes();
  });
};

export default sendLikes;
