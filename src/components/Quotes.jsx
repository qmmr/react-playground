'use strict'

import React from 'react/addons'

import QuotesForm from './QuotesForm.jsx'
import QuotesList from './QuotesList.jsx'

export default React.createClass({

	name: 'Quotes',

	getInitialState() {
		return {
			quotes: [ 'Veni Vidi Vici', 'that is correct' ]
		}
	},

	onSubmitQuote(quote) {
		this.setState({ quotes: this.state.quotes.concat([ quote ]) })
	},

	render() {
		return (
			<div>
				<h2>Quotes</h2>
				<QuotesList quotes={ this.state.quotes } />
				<QuotesForm onSubmit={ this.onSubmitQuote } />
			</div>
		)
	}
})
