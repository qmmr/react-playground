import React from 'react'

class Badge extends React.Component {
	constructor(props) {
		super(props)

		this.state = { title: props.title }
	}

	render() {
		return <div className='badge'>
			{ this.props.title } <span>{ this.props.amount }</span>
		</div>
	}
}

Badge.defaultProps = { title: 'Messages' }

export default Badge

