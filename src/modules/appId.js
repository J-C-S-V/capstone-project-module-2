const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const options = {
  method: 'POST',
  body: JSON.stringify({
    name: 'Meals Catalogue',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

// const url =
//   'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tngK8NfXluNWvAs7EHbF';

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });
