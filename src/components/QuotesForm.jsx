'use strict'

import React from 'react';

export default React.createClass({

	name: 'QuotesForm',

	propTypes: {
		onSubmit: React.PropTypes.func.isRequired
	},

	getInitialState() {
		return {
			text: ''
		}
	},

	render() {
		return (
			<form onSubmit={ this._onSubmit }>
				<label htmlFor='quote'>
					<input
						id='quote'
						type='text'
						onChange={ this._onChangeText }
						value={ this.state.text }
						placeholder='Please enter your quote of the day...' />
				</label>
				<input type='submit' value='Submit quote' />
			</form>
		)
	},


	_onSubmit(e) {
		e.preventDefault()
		if (this.state.text.trim()) {
			this.props.onSubmit(this.state.text)
			this.setState({ text: '' })
		}
	},

	_onChangeText(e) {
		this.setState({ text: e.target.value })
	}

})
