import React from 'react'
import User from './User.jsx'

//var App = React.createClass({
	//getDefaultProps: function () {
		//return {
			//title: 'React is awesome!'
		//}
	//},

	//render: function () {
		//return (
			//<div className='jumbotron'>
				//<h1>React.js v0.13 with webpack hot-loader</h1>
				//<div className='well'>{ this.props.title }</div>
				//<Badge amount={ 42 } />
			//</div>
		//)
	//}
//})

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = { title: props.title }
	}

	render() {
		return (
			<div className='jumbotron'>
				<div className='row'>
					<User login='qmmr' />
					<User login='cesarenaldi' />
					<User login='wycats' />
				</div>
			</div>
		)
	}
}

App.defaultProps = { title: 'React is awesome!' }

export default App

