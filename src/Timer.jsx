'use strict'

import React from 'react'

export default React.createClass({
	getInitialState() {
		return {
			time: 0
		}
	},

	componentDidMount() {
		this.timer = setInterval(this.tick, 1000)
	},

	componentWillUnmount() {
		this.timer && clearInterval(this.timer)
	},

	tick() {
		this.setState({ timer: this.timer += 1 })
	},

	render() {
		return <output>{ this.state.timer }</output>
	}
})
