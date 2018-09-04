export function selectBook(book) {
  // selectBook is an ActionCreator so it needs to return an action,
  // which is an object with a type property and sometimes also a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
