import React, { Component } from 'react';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
            {
                /* TODO :  Verificar uma forma de atulizar os livros localmente sem fazer a requisição novamento */
            }
            //this.setState({ Books })
        });
    };

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div>
                                {/* TODO :  Esconder a div quando não existir nenhum livro na 'shelf' */}

                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <ListBooks
                                        books={this.state.Books.filter(
                                            book => book.shelf === 'currentlyReading'
                                        )}
                                        onUpdateBook={this.updateBook}
                                    />
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <ListBooks
                                        books={this.state.Books.filter(
                                            book => book.shelf === 'wantToRead'
                                        )}
                                        onUpdateBook={this.updateBook}
                                    />
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <ListBooks
                                        books={this.state.Books.filter(
                                            book => book.shelf === 'read'
                                        )}
                                        onUpdateBook={this.updateBook}
                                    />
                                </div>
                            </div>
                        )}
                    />
                </div>
                <div className="open-search">
                    <Link to="/search" className="open-search">
                        Add a Book
                    </Link>
                    <Route
                        path="/search"
                        render={({ history }) => (
                            <SearchBook
                                onSearchBook={() => {
                                    history.push('/');
                                }}
                            />
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default BooksApp;
