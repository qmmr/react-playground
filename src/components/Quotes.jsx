'use strict'

import React from 'react/addons'

var cx = React.addons.classSet

export default React.createClass({

	display: 'Quotes',

	getInitialState() {
		return {
			quotes: []
		}
	},

	onSubmitQuote(quote) {
		let mergedQuotes = this.state.quotes.concat([ quote ])

		this.state.setState({ quotes: mergedQuotes })
	},

	render() {
		return (
			<ul className={ this.getClassNames }>
			{ this._getListElements() }
			</ul>
		)
	},

	getClassNames() {
		return cx({
			'list-quotes': true
		})
	},

	_getQuotes() {
		return [ 'list of funny quotes', 'that is correct' ]
	},

	_getListElements() {
		let createListItem = (quote, idx) => <li key={ idx }>{ quote }</li>

		return this._getQuotes().map(createListItem)
	}
})
