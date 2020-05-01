// import $ from 'jquery';

// import 'normalize.css';
// import './index.css';

import store from './store.js';
import api from './api.js';
import bookmarks from './bookmarks.js';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
    items.forEach((item) => store.addBookmark(item));
    console.log(store.bookmarks)
    bookmarks.renderPage();
  });

  // bookmarks.bindEventListeners();
  bookmarks.renderPage();
};

$(main);
