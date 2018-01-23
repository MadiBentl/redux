import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=> {
      return (
        <li onClick = {()=>this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  render(){
    return(
      <ul className='list-group col-sm-4'>
      {this.renderList()}
      </ul>
    )
  }
}

//anything returned from this fn will end up as props in booklist container
//dispatch sends everything out.
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, pass result to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

function mapStateToProps(state){
  return{
    books: state.books //connection between container + state
  };
}

//makes Booklist a container and not a component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
