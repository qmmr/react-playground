import React from 'react'
import User from './User.jsx'

var json = '{"html":"<h1>Hello world!</h1>","name":"Foo"}'

var App = React.createClass({
	getInitialState: function() {
		return { name: '' }
	},

	childContextTypes: {
		setName: React.PropTypes.func.isRequired
	},

	getChildContext: function() {
		return {
			setName: name => this.setState({ name })
		}
	},

	componentDidMount() {
		let header = React.findDOMNode(this.refs.header)
		console.log('cMARCIN :: App.jsx:23 :: child', header)
	},

	render: function () {
		return (
			<div className='jumbotron'>
				<h1 ref='header'>React.js v0.13 with webpack hot-loader</h1>
				<div>Hi, my name is { this.state.name }!</div>
				{ JSON.parse(json).html }
				<Child />
			</div>
		)
	}
})

var Child = React.createClass({
	contextTypes: {
		setName: React.PropTypes.func.isRequired
	},

	updateName: function(e) {
		this.context.setName(e.currentTarget.value)
	},

	render() {
		return (
			<input type='text' onChange={ this.updateName } value={ this.context.name } defaultValue={ 'Hello' } />
		)
	}
})

// class App extends React.Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = { title: props.title }
// 	}

// 	render() {
// 		return (
// 			<div className='jumbotron'>
// 				<div className='row'>
// 					<User login='qmmr' />
// 					<User login='cesarenaldi' />
// 					<User login='wycats' />
// 				</div>
// 			</div>
// 		)
// 	}
// }

App.displayName = 'App'
App.defaultProps = { title: 'React is awesome!' }

export default App

