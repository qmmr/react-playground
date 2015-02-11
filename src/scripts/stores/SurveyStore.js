import { EventEmitter } from 'events'

export default class SurveyStore extends EventEmitter {
	constructor() {
		this._questions = [
			{ text: 'What is your favourite programming language?' },
			{ text: 'What is your preferred editor?' },
			{ text: 'What is the average speed of an unloaded swallow?' }
		]

		super()
	}

	emitChange() {
		this.emit(CHANGE_EVENT)
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback)
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	}

	getQuestions() {
		return this._questions
	}
}
