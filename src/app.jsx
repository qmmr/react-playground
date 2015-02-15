import React from 'react'
import TodoApp from './components/TodoApp.jsx'

var App = React.createClass({

	displayName: 'App',

	render() {
		return (
			<section className="todoapp">
				<h1>TodoApp</h1>
				<h2>built with <strong>React.js</strong> and <strong>Firebase!</strong></h2>
				<TodoApp />
			</section>
		)
	}

})

React.render(<App />, document.querySelector('#container'))
