import displayTotalComments from './count-comments.js';

// GET Comments
const getComments = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/comments?item_id=4',
  );
  const json = await response.json();
  const commentsBox = document.querySelector('.comments-box');
  const commentsHTML = json.map(
    (comment) => `<li class="commentsLI">${comment.creation_date} ${comment.username}: ${comment.comment}</li>`,
  );
  const commentsString = commentsHTML.join('');
  commentsBox.innerHTML = commentsString;
  displayTotalComments();
};

export default getComments;