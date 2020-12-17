import React, {Component} from 'react';
import BookListItem from "../book-list-item";
import {Link} from "react-router-dom";

import './book-list.css';

class BookList extends Component {

    render() {
        const {books} = this.props;

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
        )
    }
}
export default BookList;