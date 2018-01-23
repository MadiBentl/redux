//action creator
export function selectBook(book){
  //action; needs to return an object with a type property (and sometimes a payload)
  //type is always in capital letters.
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}
