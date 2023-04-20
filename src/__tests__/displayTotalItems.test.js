import { JSDOM } from 'jsdom';
import displayTotalItems from '../modules/displayTotalItems.js';

// rest of the code...

// Set up a basic DOM environment using JSDOM
const dom = new JSDOM('<html><body></body></html>');
global.document = dom.window.document;

describe('displayTotalItems', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <ul class="list-Item-items"></ul>
      <div class="cards-container">
        <span class="thumbs-up"></span>
        <span class="thumbs-up"></span>
        <span class="thumbs-up"></span>
      </div>
      <div class="cards-container">
        <span class="thumbs-up"></span>
        <span class="thumbs-up"></span>
      </div>
    `;
  });

  test('returns the correct number of items', () => {
    expect(displayTotalItems()).toBe(5);
  });
});
