import './index.scss';
import getData from './modules/getData.js';

getData();

// console.log(data);

const options = {
  method: 'POST',
  body: JSON.stringify({
    item_id: 'item 1',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

fetch(
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NakiP3aQSm2xRejtX0k2/likes',
  options
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
