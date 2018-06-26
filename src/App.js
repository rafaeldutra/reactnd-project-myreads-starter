import React, { Component } from 'react';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        Books: [],
    };

    componentDidMount() {
        BooksAPI.getAll().then(Books => {
            this.setState({ Books });
        });
    }

    updateBook = (id_book, shelf) => {
        BooksAPI.update({ id: id_book }, shelf).then(result => {
            this.componentDidMount();
        });
    };

    render() {
        return (
          <div className="app">
                
                <Route exact path="/" render={() => (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <ListBooks
                        books={this.state.Books}
                        onUpdateBook={this.updateBook}
                    />
                </div>
                 )}/>
                 <Route path="/search" render={({ history}) => (
                    <SearchBook 
                        onSearchBook={ () => {
                        history.push('/')
                      }
                    }/>
                  )}/>
            </div>
        )
    }
}

export default BooksApp;
