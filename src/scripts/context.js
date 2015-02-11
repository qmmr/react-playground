import AppDispatcher from './dispatcher/AppDispatcher'
import SurveyStore from './stores/SurveyStore'

import iniettore from 'iniettore'
import { VALUE, LAZY, PROVIDER, SINGLETON, CONSTRUCTOR } from 'iniettore'

class UltimateQuestion {
	constructor(answer) {
		console.log(answer)
	}
}

function questionProvider(answer) {
	return {
		question: 'What is the ultimate number?',
		answer
	}
}

var rootContext = iniettore.create(function (map) {
	map('answer').to(42).as(VALUE)
	map('question').to(UltimateQuestion).as(LAZY, SINGLETON, CONSTRUCTOR).injecting('answer')
	map('appDispatcher').to(AppDispatcher).as(LAZY, SINGLETON, CONSTRUCTOR)
	map('surveyStore').to(SurveyStore).as(LAZY, SINGLETON, CONSTRUCTOR)
})

var childContext = rootContext.createChild(function (map) {
	map('question').to(questionProvider).as(PROVIDER).injecting('answer')
})

var question = rootContext.get('question') // 42
var appDispatcher = rootContext.get('appDispatcher')

console.log(question instanceof UltimateQuestion) // true
console.log('appDispatcher instanceof AppDispatcher', appDispatcher instanceof AppDispatcher) // true
console.log('question: ', childContext.get('question').question)

export default rootContext
