'use strict'

import React from 'react'

var setIntervalMixin = {
	componentWillMount() {
		this.intervals = []
	},
	setInterval() {
		this.intervals.push(setInterval.apply(null, arguments))
	},
	componentWillUnmount() {
		this.intervals.forEach(clearInterval)
	}
}

export default React.createClass({

	displayName: 'Timer',

	mixins: [ setIntervalMixin ],

	getInitialState() {
		return { time: 0 }
	},

	componentDidMount() {
		this.setInterval(this.tick, 1000)
	},

	tick() {
		this.setState({ timer: this.state.time += 1 })
	},

	render() {
		return <output>{ this.state.time }</output>
	}
})
