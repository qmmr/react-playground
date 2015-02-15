import React from 'react'

export default React.createClass({

	displayName: 'TodoList',

	removeHandler(e) {
		this.props.remove()
	},

	render() {
		return (
			<div>
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">{ this.props.items.map(this._createItem) }</ul>
			</div>
		)
	},

	_createItem(item, idx) {
		return (
			<li key={ idx } data-id={ item.id ? item.id : 0 }>
				{ this._createView(item.text) }
				<input className="edit" readOnly value={ item.text } />
			</li>
		)
	},

	_createView(text) {
		return (
			<div className="view">
				<input className="toggle" type="checkbox" />
				<label>{ text }</label>
				<button className="destroy" onClick={ this.removeHandler }></button>
			</div>
		)
	}

})
