'use strict'

import React from 'react/addons'

import QuotesForm from './QuotesForm.jsx'
import QuotesList from './QuotesList.jsx'

export default React.createClass({

	displayName: 'Quotes',

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
				<button className="btn btn-primary" onClick={ this._prevStep }>Prev step</button>
				<button className="btn btn-primary pull-right" onClick={ this._nextStep }>Next step</button>
			</div>
		)
	},

	_prevStep(e) {
		e.preventDefault()

		this.props.prevStep()
	},

	_nextStep(e) {
		e.preventDefault()

		// this.props.saveValues(data)
		this.props.nextStep()
	}
})
