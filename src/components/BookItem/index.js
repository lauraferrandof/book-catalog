import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { book } from '../../services/propTypes';

class BookItem extends Component {
	render() {
		const {
			bookInd,
			filteredBooks,
			book
		} = this.props;

		const {
			title,
			price,
			genres
		} = book;

		return (
			<li className="books__item">
				<h2 className="book__description">{`Book ${bookInd + 1} of ${filteredBooks.length}`}</h2>
				<h3 className="book__title">
					Title:<span className="book__content"> {title ? title : 'no data'}</span>
				</h3>

				<h3 className="book__title">
					Price:<span className="book__content"> {price ? `$${price}` : 'no data'}</span>
				</h3>

				<div className="book__genres-wrapper">
					<h3 className="book__title">Genres:</h3>

					{(genres.length === 0) ? (
						<span className="book__content">no data</span>
					) : (
						<ul className="genres__list">
							{genres.map((genre, ind) => (
								<li key={ind} className="genres__item">
									{genre ? genre : 'no data'}
								</li>
							))}
						</ul>
					)}
				</div>
			</li>
		);
	}
}

BookItem.propTypes = {
	bookInd: PropTypes.number.isRequired,
	filteredBooks: PropTypes.arrayOf(
		PropTypes.shape(book).isRequired
	).isRequired,
	book: PropTypes.shape(book).isRequired
}

export default BookItem;
