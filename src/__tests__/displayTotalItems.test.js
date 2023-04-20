// import sum from '../modules/displayTotalItems.js';

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

import displayTotalItems from '../modules/displayTotalItems.js';

test('Counts the number of items in the list', () => {
  document.body.innerHTML = `
          <span class="thumbs-up 52977">👍</span>
          <span class="thumbs-up 53060">👍</span>
          <span class="thumbs-up 53065">👍</span>
  `;
  expect(displayTotalItems()).toBe(3);
});
