import { JSDOM } from 'jsdom';
import displayTotalComments from '../modules/count-comments.js';

// Set up a basic DOM environment using JSDOM
const dom = new JSDOM('<html><body></body></html>');
global.document = dom.window.document;

describe('displayTotalComments', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="popup-comments">
        <h3 class="comments-conter">Comments ()</h3>
        <ul class="comments-box">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
      </div>
    `;
  });

  test('returns the correct number of items', () => {
    expect(displayTotalComments()).toBe(5);
  });
});
