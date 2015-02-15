import React from 'react'

export default React.createClass({

	displayName: 'TodoList',

	render() {
		var createItem = (itemText, idx) => {
			return (
				<li key={ idx }>
					{ createView(itemText) }
					<input className="edit" readOnly value={ itemText } />
				</li>
			)
		}
		var createView = (text) => {
			return (
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>{ text }</label>
					<button className="destroy"></button>
				</div>
			)
		}

		return <ul className="todo-list">{ this.props.items.map(createItem) }</ul>
	}

})
