'use strict'

import React from 'react'
import intervalMixin from '../mixins/intervalMixin'

export default React.createClass({

	displayName: 'Timer',

	mixins: [ intervalMixin ],

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
