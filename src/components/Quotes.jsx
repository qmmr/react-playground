'use strict'

import React from 'react/addons'

var cx = React.addons.classSet

export default React.createClass({

	display: 'Quotes',

	render() {
		return (
			<ul className={ this.getClassNames }>
			{ this._getListElements() }
			</ul>
		)
	}

	getClassNames() {
		return cx({
			'list-quotes': true
		})
	}

	_getQuotes() {
		return [ 'list of funny quotes', 'that is correct' ]
	}

	_getListElements() {
		let createListItem = (quote, i) => <li key={ idx }>{ quote }</li>

		return this._getQuotes().map(createListItem)
	}
})
