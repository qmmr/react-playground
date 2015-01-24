'use strict'

import React from 'react'
import objectAssign from 'object-assign'

import AccountFields from './AccountFields.jsx'
import Survey from './Survey.jsx'
// import Confirmation from './Confirmation.jsx'
// import Success from './Success.jsx'

var fieldValues = {
	name: '',
	email: '',
	password: '',
	age: '',
	colors: []
}

var Registration = React.createClass({

	name: 'Registration',

	getInitialState() {
		return {
			step: 1
		};
	},

	render() {
		let progressValue = this.state.step / 4 * 100
		let percentage = `${progressValue}%`
		let style = { width: percentage }

		return (
			<section className="row">
				<h3>Step: { this.state.step }</h3>
				<div className="progress">
					<div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={ progressValue } aria-valuemin="0" aria-valuemax="100" style={ style }>
						<span className="sr-only">{ percentage } Complete (success)</span>
					</div>
				</div>
				{ this._showStep() }
			</section>
		)
	},

	saveValues(values) {
		fieldValues = objectAssign(fieldValues, values)
	},

	nextStep() {
		this.setState({
			step: this.state.step + 1
		})
	},

	prevStep() {
		this.setState({
			step: this.state.step - 1
		})
	},
	_showStep() {
		switch(this.state.step) {
			case 1:
				return <AccountFields
						fieldValues={ fieldValues }
						nextStep={ this.nextStep }
						saveValues={ this.saveValues } />
				break
			case 2:
				return <Survey
						fieldValues={ fieldValues }
						nextStep={ this.nextStep }
						prevStep={ this.prevStep }
						saveValues={ this.saveValues } />
		}
	}

})

React.render(<Registration />, document.querySelector('#container'))
