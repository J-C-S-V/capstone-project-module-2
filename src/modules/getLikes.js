const getLikes = () => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/likes',
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export default getLikes;
