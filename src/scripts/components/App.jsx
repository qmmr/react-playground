import React from 'react';

import Registration from './Registration.jsx'

export default React.createClass({

	displayName: 'App',

	render() {
		return (
			<section className="container">
				<h1>Multistep registration build with React.js!</h1>
				<Registration />
			</section>
		)
	}

})
