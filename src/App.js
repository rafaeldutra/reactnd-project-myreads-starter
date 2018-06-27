import React, { Component } from 'react';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends Component {
    state = {
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
                        myBooks={this.state.Books}
                        onUpdateBook={this.updateBook}
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
