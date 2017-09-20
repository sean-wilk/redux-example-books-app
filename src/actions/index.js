export function selectBook(book) {
  //selectBook is an action creator, it needs to return a reaction
  //an object with a type property

  return {
    type: 'BOOK_SELECTED',
    payload: book
    };
}
