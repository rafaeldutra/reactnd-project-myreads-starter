import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  state = {
    optionsdata: [
      { key: 'move', value: 'Move to...', disable: true},
      { key: 'currentlyReading', value: 'Currently Reading', disable: false },
      { key: 'wantToRead', value: 'Want to Read', disable: false },
      { key: 'read', value: 'Read', disable: false },
      { key: 'none', value: 'None', disable: false }
    ],
  }

  selectOptions(shelf) {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} defaultValue={ shelf }>
          {this.state.optionsdata.map(function (data, key) {
            return (
              <option key={key} value={data.key} disabled={data.disable}>{data.value}</option>)
          })}
        </select>
      </div>
    )
  }

  handleChange = (event) => {
    this.props.onUpdateBook(event.target.parentNode.parentNode.id, event.target.value)
  }
  
  renderOrdList = (books) => {
    return(
    <div>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(
                book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div id={book.id} className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
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

  render() {
    const { books, onUpdateBook } = this.props;

    if (books.length > 0) {
      return (
        <div className="list-books-content">
              <div>
                {/* TODO :  Esconder a div quando não existir nenhum livro na 'shelf' */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    {this.renderOrdList(this.props.books.filter((book) => book.shelf === 'currentlyReading'))}
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    {this.renderOrdList(books.filter((book) => book.shelf === 'wantToRead'))}
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    {this.renderOrdList(books.filter((book) => book.shelf === 'read'))}
                </div>
              </div>
              <div className="open-search">
                  <Link to="/search"> Add a book </Link>
              </div>
          </div>
      )
    } else { return '' }
  }
}
export default ListBooks

