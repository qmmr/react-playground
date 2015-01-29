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
							<input ref="question_1" type="checkbox" defaultChecked="checked" />
							Multiforms in React.js are great!!!
						</label>
					</div>
					<div className="checkbox">
						<label>
							<input ref="question_2" type="checkbox" />
							This is the second option, it is great as well!
						</label>
					</div>
					<div className="checkbox">
						<label>
							<input ref="question_3" type="checkbox" />
							This is the third option.
						</label>
					</div>
					<button className="btn btn-primary" onClick={ this._prevStep }>Prev step</button>
					<button className="btn btn-primary pull-right" onClick={ this._nextStep }>Next step</button>
				</form>
			</div>
		)
	},

	_prevStep(event) {
		event.preventDefault()

		this.props.prevStep()
	},

	_nextStep(event) {
		let data = {
			survey: {
				question_1: this.refs.question_1.getDOMNode().checked,
				question_2: this.refs.question_2.getDOMNode().checked
			}
		}

		event.preventDefault()

		this.props.saveValues(data)
		this.props.nextStep()
	}

})
