'use strict'

import React from 'react'

export default React.createClass({

	name: 'Results',

	getResults() {
		let values = this.props.fieldValues
		let items = Object.keys(values).
				map((key, idx) => <li key={ idx } className="list-group-item">{ key }: { values[ key ] }</li>)

		return (
			<ul className="list-group">
				{ items }
			</ul>
		)
	},

	render() {
		return (
			<div className="col-md-10 col-md-offset-1">
				<h1>Results</h1>
				{ this.getResults() }
				<button className="btn btn-primary" onClick={ this._prevStep }>Prev step</button>
				<button className="btn btn-warning pull-right" onClick={ this._reset }>Reset</button>
			</div>
		)
	},

	_prevStep(event) {
		event.preventDefault()

		this.props.prevStep()
	},

	_reset(event) {
		event.preventDefault()

		this.props.reset()
	}

})
