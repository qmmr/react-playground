'use strict'

import React from 'react/addons'

import QuotesForm from './QuotesForm.jsx'
import QuotesList from './QuotesList.jsx'

export default React.createClass({

	displayName: 'Quotes',

	propTypes: {
		fieldValues: React.PropTypes.shape({
			name: React.PropTypes.string,
			email: React.PropTypes.string,
			password: React.PropTypes.string,
			passwordConfirmation: React.PropTypes.string,
			survey: React.PropTypes.arrayOf(React.PropTypes.string)
		}),
		prevStep: React.PropTypes.func,
		nextStep: React.PropTypes.func,
		saveValues: React.PropTypes.func
	},

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
