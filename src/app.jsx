import React from 'react';

import Registration from './Registration.jsx'

var App = React.createClass({

	name: 'App',

	render() {
		return (
			<section className="container">
				<h1>Multistep registration build with React.js!</h1>
				<Registration />
			</section>
		)
	}

})

React.render(<App />, document.querySelector('#container'))
