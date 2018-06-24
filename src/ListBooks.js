import React, { Component } from 'react'

class ListBooks extends Component {
  state = {
    optionsdata: [
      { key: 'move', value: 'Move to...' },
      { key: 'currentlyReading', value: 'Currently Reading' },
      { key: 'wantToRead', value: 'Want to Read' },
      { key: 'read', value: 'Read' },
      { key: 'none', value: 'None' }
    ],
  }

  selectOptions() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange}>
          {this.state.optionsdata.map(function (data, key) {
            return (
              <option key={key} value={data.key}>{data.value}</option>)
          })}
        </select>
      </div>
    )
  }

  handleChange(event) {
    console.log(event.target.value)
    console.log(event.target.parentNode.parentNode.id);
    //this.onUpdateBook(event.target.parentNode.parentNode.id, event.target.value)
  }


  render() {
    const { books, onUpdateBook } = this.props;
    if (books.length > 0) {
      return (
        <div>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(
                book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div id={book.id} className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                          {this.selectOptions()}
                        </div>
                      </div>
                      <div className="book-title">To Kill a Mockingbird</div>
                      <div className="book-authors">Harper Lee</div>
                    </div>
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      )
    } else { return '' }
  }
}
export default ListBooks