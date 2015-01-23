'use strict'

import React from 'react'

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
		switch(this.state.step) {
			case 1:
				return <AccountFields fieldValues={ fieldValues } />
				break
			case 2:
				return <Survey />
			default:
				return null
				break;
		}
	}
})

React.render(<Registration />, document.querySelector('#container'))
