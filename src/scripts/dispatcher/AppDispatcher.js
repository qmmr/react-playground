import { Dispatcher } from 'flux'


var { VIEW_ACTION, SERVER_ACTION } from '../constants/sourceTypes'
var AppDispatcher = new AppDispatcher()

AppDispatcher.handleViewAction = function(action) {
	let payload = {
		source: VIEW_ACTION,
		action
	}
	this.dispatch(payload)
}

AppDispatcher.handleServerAction = function(action) {
	let payload = {
		source: SERVER_ACTION,
		action
	}
	this.dispatch(payload)
}

export default AppDispatcher
