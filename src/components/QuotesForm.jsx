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
			<form className='form-horizontal' onSubmit={ this._onSubmit }>
				<div className="form-group">
					<label htmlFor='quote'> Submit your quote </label>
					<input
						id='quote'
						className='form-control'
						type='text'
						onChange={ this._onChangeText }
						value={ this.state.text }
						placeholder='Please enter your quote of the day...' />
				</div>
				<button className='btn btn-primary btn-block' type='submit'>Submit quote</button>
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
