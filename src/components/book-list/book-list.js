import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        // 1. получаем данные
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();

        // 2. диспатчим экшен в стор
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <Link to='/cart'>
                                    <BookListItem book={book}/>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

// описывает какие данные хотим получить из стора
const mapStateToProps = ({ books }) => {
    return { books };
};
// описывает какие действия будет передовать в стор
const mapDispatchToProps = {
    booksLoaded
};

// connect оборачивает компонет BookList в hoc
// который подключается к стору
export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
