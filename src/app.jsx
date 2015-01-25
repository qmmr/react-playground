import React from 'react';

import Registration from './Registration.jsx'

var App = React.createClass({

	name: 'App',

	render() {
		return <Registration />
	}

})

React.render(<App />, document.querySelector('#container'));
