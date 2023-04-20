// Post Data
const postData = async () => {
  try {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: 'item1',
        username: 'Jane',
        comment: 'Hello',
      }),
    });
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    return error;
  }
};

// Add Data
const addData = () => {
  const submitButton = document.getElementById('add-comment-button');
  submitButton.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const insights = document.getElementById('insights').value;
    if (name === '' || insights === '') {
      return null;
    }
    await postData({ username: name, comment: insights });
    const message = document.createElement('div');
    message.textContent = 'Comment submitted successfully!';
    document.body.appendChild(message);
    setTimeout(() => {
      message.remove();
    }, 2000);
    return null;
  });
};

export default addData;