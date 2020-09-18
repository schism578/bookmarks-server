const { v4: uuid } = require('uuid');

const BookmarksService = [
  { id: uuid(),
    title: 'GitHub',
    url: 'https://www.github.com',
    description: 'Store and implore',
    rating: 5 },
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4 },
  { id: uuid(),
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The only place to find web documentation',
    rating: 5 },
]

module.exports = { BookmarksService }