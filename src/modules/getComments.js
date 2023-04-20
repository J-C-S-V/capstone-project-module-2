// GET Comments
const getComments = async () => {
  try {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/comments?item_id=item1');
    const json = await response.json();
    console.log(json);

    // Get the <ul> element to which comments will be added
    const commentsBox = document.querySelector('.comments-box');

    // Create an array of HTML strings for each comment using Array.map()
    const commentsHTML = json.map((comment) => `<li class="commentsLI">${comment.creation_date} ${comment.username}:${comment.comment}</li>`);

    // Join the array of HTML strings into a single string
    const commentsString = commentsHTML.join('');

    // Append the HTML string to the <ul> element
    commentsBox.insertAdjacentHTML('beforeend', commentsString);
  } catch (error) {
    console.log(error);
  }
};

// Export the function as default
export default getComments;
