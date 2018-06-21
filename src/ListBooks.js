import React from 'react'


class ListBooks extends React.Component {
      state = {
        shelfs: [],
        optionsdata: [
          {key:'move',value:'Move to...'},
          {key:'currentlyReading',value:'Currently Reading'},
          {key:'wantToRead',value:'Want to Read'},
          {key:'read',value:'Read'},
          {key:'none',value:'None'}
          ],
    }

    render(){
        
        const{ books } = this.props
          // console.log(books)
        if(books){
            this.state.shelfs.push(books.filter((book) => book.shelf === 'currentlyReading'))
            this.state.shelfs.push(books.filter((book) => book.shelf === 'wantToRead'))
            this.state.shelfs.push(books.filter((book) => book.shelf === 'read'))
            this.state.shelfs = this.state.shelfs.filter( (shelf) => shelf.length)
        }
        // console.log(this.state.shelfs)
        var teste1 = this.state.shelfs.map( (shelf) => shelf.filter( (book) => book.shelf) );
        console.log(teste1);



        // console.log(teste)
        if(teste1) {
        return(
          
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">To Kill a Mockingbird</div>
                    <div className="book-authors">Harper Lee</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        )
      }
      else return ''
    }
}

export default ListBooks