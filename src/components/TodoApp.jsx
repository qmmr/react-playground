import React from 'react'
import TodoList from './TodoList.jsx'

export default React.createClass({

	displayName: 'TodoApp',

	FBURL: 'https://firetodoapp.firebaseio.com/items',

	mixins: [ ReactFireMixin ],

	componentWillMount() {
		this.bindAsArray(new Firebase(this.FBURL), 'items')
	},

	getInitialState() {
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

		if (this.state.text.trim()) {
			this.firebaseRefs.items.push({
				text: this.state.text,
				id: +new Date()
			})
			this.setState({ text: '' })
		}
	},

	removeItem(key) {
		console.log('%cMARCIN :: TodoApp.jsx:40 :: key', 'background: #222; color: lime', key)
		// this.firebaseRefs.items.push({ text: 'Firebase' })
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

				<TodoList items={ this.state.items } remove={ this.removeItem } />

			</div>
		)
	}

})
