'use strict'

import React from 'react'

export default React.createClass({

	name: 'AccountFields',

	getInitialState() {
		return {
			name: this.props.fieldValues.name
		}
	},

	render() {
		return (
			<form>
				<label for="name">Name
					<input ref="name" type="text" name="name" id="name" placeholder="Your name..." defaultValue={ this.state.name } />
				</label>
				<label for="password">Password
					<input ref="name" type="password" name="password" id="password" placeholder="Enter your password..." />
				</label>
			</form>
		)
	}
})
