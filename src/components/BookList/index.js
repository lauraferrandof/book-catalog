import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { book } from '../../services/propTypes';
import './BookList.scss';
import BookItem from '../BookItem';

class BookList extends Component {
	render() {
		const { filteredBooks } = this.props;
		return (
			<section className="app__books">
				<ul className="books__list">
					{filteredBooks.map((book, ind) => {
						return (
							<BookItem
								key={ind}
								bookInd={ind}
								filteredBooks={filteredBooks}
								book={book}
							/>
						);
					})}
				</ul>
			</section>
		);
	}
}

BookList.propTypes = {
	filteredBooks: PropTypes.arrayOf(
		PropTypes.shape(book).isRequired
	).isRequired
}

export default BookList;
