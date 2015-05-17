import React from 'react'

class User extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			url: `https://api.github.com/users/${ props.login }`,
			user: {}
		}

		window.fetch(this.state.url)
			.then(resp => resp.json())
			.then(user => this.setState({ user }))
	}

	render() {
		let { user } = this.state

		return (
			<div className='col-sm-6 col-md-4'>
				<div className='thumbnail'>
					<img src={ user.avatar_url } alt={ user.name } />
					<div className='caption'>
						<h3>{ user.name }</h3>
						<h4>{ user.login }</h4>
						<p>Location: { user.location }</p>
						<p>
							<a href='#' className='btn btn-primary' role='button'>Button</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

User.displayName = 'User'
User.propTypes = { login: React.PropTypes.string }

export default User
