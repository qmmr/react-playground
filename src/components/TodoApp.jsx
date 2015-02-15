import React from 'react'
import TodoList from './TodoList.jsx'

export default React.createClass({

	displayName: 'TodoApp',

	componentWillMount() {
		this.FBURL = 'https://favorite-movies.firebaseio.com/'
		this.firebaseRef = new Firebase(`${this.FBURL}items`)
		this.firebaseRef.on('child_added', (dataSnapshot) => {
			this.items.push(dataSnapshot.val())
			this.setState({ items: this.items })
		})
	},

	componentWillUnmount() {
		this.firebaseRef.off()
	},

	getInitialState() {
		// Firebase items are landing here
		this.items = []

		return {
			items: [],
			text: ''
		}
	},

	onChange(e) {
		this.setState({ text: e.target.value })
	},

	handleSubmit(e) {
		e.preventDefault()

		this.firebaseRef.push({ text: this.state.text })
		this.setState({ text: '' })
	},

	render() {
		return (
			<div>
				<header className="header">
					<form onSubmit={ this.handleSubmit }>
						<input
							className="new-todo"
							placeholder="What needs to be done?"
							onChange={ this.onChange }
							value={ this.state.text } />
					</form>
				</header>

				<TodoList items={ this.state.items } />

			</div>
		)
	}

})
