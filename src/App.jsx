import React from 'react'
import Map from './Map.jsx'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = { title: props.title, query: '' }
	}

	handleChange(e) {
		console.log('handleChange', e)
		//this.setState({ query: e.target.value })
	}

	render() {
		var coords = { latitude: 51.5558, longitude: -0.2797 }
		return (
			<div className='jumbotron'>
				<div className='row'>
					<h1>{ this.props.title }</h1>
					<h2>{ this.state.query ? this.state.query : 'Default' }</h2>
					<input type='text' onChange={ this.handleChange } value={ this.state.query } />
					<Map coords={ coords } />
				</div>
			</div>
		)
	}
}

App.defaultProps = { title: 'Sample map with Mapbox.js' }

export default App
