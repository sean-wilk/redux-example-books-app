import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  // whatever is returned from here will show up as props inside BookList
  return {
    books:state.books
  };
  //This function is the glue between React & Redux!
}

function mapDispatchToProps (dispatch){
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook:selectBook }, dispatch)
}
//Anything returned from this function will ed up as props on BookList container
//Promote Booklist from a component to a container - it needs to know bout this new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList)
