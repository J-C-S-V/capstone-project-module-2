import getComments from './getComments.js';

// Post Data
const postData = async () => {
  const name = document.getElementById('Name').value;
  const comment = document.getElementById('insights').value;

  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/comments',
    {
      method: 'POST',

      body: JSON.stringify({ item_id: '4', username: name, comment }),

      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  // Clean input values
  document.getElementById('Name').value = '';
  document.getElementById('insights').value = '';
  getComments();
};

export default postData;