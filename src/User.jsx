import React from 'react'

class User extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		window.fetch(this.props.login)
			.then(resp => resp.json())
			.then(user => {
				console.log(user)
				this.setState({ user })
			})

	}

	render() {
		return (
			<div className='row'>
				<div className='col-sm-6 col-md-4'>
					<div className='thumbnail'>
						<img src={ this.state.user.avatar_url } alt={ this.state.user.name } />
						<div className='caption'>
							<h3>Thumbnail label</h3>
							<p>Some info goes here...</p>
							<p>
								<a href='#' className='btn btn-primary' role='button'>Button</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

User.displayName = 'User'
User.propTypes = { login: React.propTypes.String }

