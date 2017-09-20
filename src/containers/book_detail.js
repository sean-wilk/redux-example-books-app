import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component  {
  render() {
    if (!this.props.book) {
      return <div> Select a book to get started </div>
    }

    return (
      <div>
        <h4> Details for: </h4>
        <div> {this.props.book.title} </div>
        <h5> Length: </h5>
        <div> {this.props.book.length} </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail)
