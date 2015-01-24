'use strict'

import React from 'react'

export default React.createClass({

	name: 'AccountFields',

	getInitialState() {
		return {
			name: this.props.fieldValues.name || '',
			email: this.props.fieldValues.email || ''
		}
	},

	nextStep() {
		let data = {
			name: this.refs.name.getDOMNode().value,
			password: this.refs.password.getDOMNode().value,
			email: this.refs.email.getDOMNode().value
		}

		this.props.saveValues(data)
		this.props.nextStep()
	},

	render() {
		return (
			<div className="col-md-8">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input ref="name" className="form-control" type="text" name="name" id="name" placeholder="Your name..." defaultValue={ this.state.name } />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input ref="password" className="form-control" type="password" name="password" id="password" placeholder="Enter your password..." />
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input ref="email" className="form-control" type="email" name="email" id="email" placeholder="Enter your email..." />
				</div>
				<button className="btn btn-primary pull-right" onClick={ this.nextStep }>Next step</button>
			</div>
		)
	}
})
