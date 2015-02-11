'use strict'

import React from 'react'

import ActionCreators from '../actions/ActionCreators'
import context from '../context'

var surveyStore = context.get('surveyStore')
console.log('Survey::context', context)
console.log('Survey::surveyStore', surveyStore.getQuestions())

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

	getInitialState() {
		return {
			questions: surveyStore.getQuestions()
		}
	},

	render() {
		return (
			<div className="col-md-8 col-md-offset-2">
				{ this._renderCheckboxes() }
				<button className="btn btn-primary" onClick={ this._prevStep }>Prev step</button>
				<button className="btn btn-primary pull-right" onClick={ this._nextStep }>Next step</button>
			</div>
		)
	},

	_renderCheckboxes: function() {
		return (
			<form action="">
				{ this.state.questions.map((question, idx) => {
					return (
						<div key={ 'question_' + idx } className="checkbox">
							<label>
								<input ref="question_{ idx }" type="checkbox" />
								{ question.text }
							</label>
						</div>
					)
				})}
			</form>
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
