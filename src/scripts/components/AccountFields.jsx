'use strict'

import React from 'react'

export default React.createClass({

	displayName: 'AccountFields',

	propTypes: {
		fieldValues: React.PropTypes.shape({
			name: React.PropTypes.string,
			email: React.PropTypes.string,
			password: React.PropTypes.string,
			passwordConfirmation: React.PropTypes.string,
			survey: React.PropTypes.arrayOf(React.PropTypes.string)
		}).isRequired,
		nextStep: React.PropTypes.func.isRequired,
		saveValues: React.PropTypes.func.isRequired
	},

	getInitialState() {
		return {
			name: this.props.fieldValues.name || '',
			email: this.props.fieldValues.email || ''
		}
	},

	render() {
		return (
			<div className="col-md-8">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						ref="name"
						className="form-control"
						type="text"
						name="name"
						id="name"
						placeholder="Your name..."
						defaultValue={ this.state.name } />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						ref="password"
						className="form-control"
						type="password"
						name="password"
						id="password"
						placeholder="Enter your password..." />
				</div>
				<div className="form-group">
					<label htmlFor="password-confirm">Confirm password</label>
					<input
						ref="passwordConfirm"
						className="form-control"
						type="password"
						name="password-confirm"
						id="password-confirm"
						placeholder="Confirm your password..." />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						ref="email"
						className="form-control"
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email..."
						defaultValue={ this.state.email } />
				</div>
				<button className="btn btn-primary pull-right" onClick={ this._nextStep }>Next step</button>
			</div>
		)
	},

	_nextStep() {
		let data = {
			name: this.refs.name.getDOMNode().value,
			password: this.refs.password.getDOMNode().value,
			passwordConfirm: this.refs.passwordConfirm.getDOMNode().value,
			email: this.refs.email.getDOMNode().value
		}

		this.props.saveValues(data)
		this.props.nextStep()
	}
})
