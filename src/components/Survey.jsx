'use strict'

import React from 'react'

export default React.createClass({

	displayName: 'Survey',

	propTypes: {
		fieldValues: React.PropTypes.shape({
			name: React.PropTypes.string,
			email: React.PropTypes.string,
			password: React.PropTypes.string,
			passwordConfirmation: React.PropTypes.string,
			survey: React.PropTypes.arrayOf(React.PropTypes.string)
		}),
		prevStep: React.PropTypes.func,
		nextStep: React.PropTypes.func,
		saveValues: React.PropTypes.func
	},

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
