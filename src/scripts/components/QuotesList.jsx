'use strict'

import React from 'react';

export default React.createClass({

	name: 'QuotesList',

	propTypes: {
		quotes: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
	},

	render() {
		return (
			<ul className='list-group'>
				{ this._getQuotes() }
			</ul>
		)
	},

	_getQuotes() {
		let createListItem = (quote, idx) => <li key={ idx } className='list-group-item'>{ quote }</li>

		return this.props.quotes.map(createListItem)
	}

})
