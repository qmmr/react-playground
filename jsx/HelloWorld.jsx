class HelloWorld extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <h1>
			Hello
			<strong>{ this.props.name }</strong>
			!
		</h1>
	}
}

HelloWorld.propTypes = { name: React.propTypes.String }

