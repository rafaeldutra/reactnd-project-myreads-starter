import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBook extends Component {
  state = {
    optionsdata: [
      { key: 'move', value: 'Move to...', disable: true},
      { key: 'currentlyReading', value: 'Currently Reading', disable: false },
      { key: 'wantToRead', value: 'Want to Read', disable: false },
      { key: 'read', value: 'Read', disable: false },
      { key: 'none', value: 'None', disable: false }
    ],
    books: [],
  }

  selectOptions(shelf) {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChangeOptions} defaultValue={ shelf ? shelf : 'none' } >
          {this.state.optionsdata.map(function (data, key) {
            return (
              <option key={key} value={data.key} disabled={data.disable}>{data.value}</option>)
          })}
        </select>
      </div>
    )
  }

  handleChangeOptions = (event) => {
    event.preventDefault();
    this.props.onUpdateBook(event.target.parentNode.parentNode.id, event.target.value)
  }

  handleChange = (event) => {
    event.preventDefault();
    var { value } = event.target;

    if (value && value.length > 2) {
        BooksAPI.search(event.target.value)
            .then(res => this.setState({ books: res }))
            .catch(error => this.setState({ books: []}));
        } else{
          this.setState({ books: []})
        }
  }

  getBook = (book) => {
    const found = this.props.myBooks.filter(item => book.id === item.id);
    if (found.length > 0) {
        book.shelf = found[0].shelf;
        return book;
    } else {
        return book;
    }
  }

  render() {
    const { myBooks, onUpdateBook} = this.props;
    var { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
                type='text'
                placeholder='Search by title or author'
                onChange={(event) => this.handleChange(event)}
            />
          </div>
        </div>
        <br/><br/>
        <div className="bookshelf-books">
            <ol className="books-grid">
              {books && books.length > 0 && books.map(
                book => (
                  this.getBook(book),
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div id={book.id} className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.hasOwnProperty('imageLinks') && book.imageLinks.thumbnail})` }}>
                        {this.selectOptions(book.shelf)}
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
                ))
              }
            </ol>
          </div>
      </div>
    )
  }
}
export default SearchBook
