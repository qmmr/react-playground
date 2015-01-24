'use strict'

import React from 'react'

export default React.createClass({

	name: 'Survey',

	render() {
		return (
			<div className="col-md-8 col-md-offset-2">
				<form action="">
					<div className="checkbox">
						<label>
							<input ref="question_1" type="checkbox" defaultValue="1" />
							Multiforms in React.js are great!
						</label>
					</div>
					<div className="checkbox">
						<label>
							<input ref="question_2" type="checkbox" defaultValue="2" />
							This is the second option, it is great as well!
						</label>
					</div>
					<button className="btn btn-primary" onClick={ this._prevStep }>Prev step</button>
					<button className="btn btn-primary pull-right" onClick={ this._nextStep }>Next step</button>
				</form>
			</div>
		)
	},

	_prevStep() {
		e.preventDefault()
	},

	_nextStep() {
		let data = {
			survey: {
				question_1: this.refs.question_1.getDOMNode().value,
				question_2: this.refs.question_2.getDOMNode().value
			}
		}

		e.preventDefault()

		this.props.saveFields(data)
		this.props.nextStep()
	}

})
