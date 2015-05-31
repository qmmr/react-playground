import React from 'react'

class Map extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		let { coords: { latitude, longitude }, zoom } = this.props

		window.L.mapbox.accessToken = 'pk.eyJ1IjoicW1tciIsImEiOiI5M2IzOGE2Y2I4OWNkZjU5MWQ3MzczMTU0ZTEwMzU4ZiJ9.-K1TLL2ZDIO3axOl0JaNUA'

			//id: 'qmmr.1468277e',
		let map = window.L.mapbox.map('map', 'mapbox.streets').setView([ latitude, longitude ], zoom)
		let polyline = L.polyline([]).addTo(map)
		let geocoder = L.mapbox.geocoder('mapbox.places')

		let showOnMap = function(err, data) {
			if (data.lbounds) {
				map.fitBounds(data.lbounds)
			} else if (data.latlng) {
				map.setView([ data.latlng[0], data.latlng[1] ], 13)
			}
		}

		map.on('click', function(e) {
			let { lat, lng } = e.latlng

			console.log('map click', e, lat, lng)

			map.setView([ lat, lng ], zoom)
			window.L.marker([ lat, lng ]).addTo(map)
		})

		//geocoder.query('Wembley Stadium, London, UK', showOnMap)


		//let marker = window.L.marker([ latitude, longitude ]).addTo(map)
	}

	render() {
		return <div id='map' style={{ height: this.props.height }}></div>
	}
}

Map.displayName = 'Map'
Map.propTypes = {
	height: React.PropTypes.string,
	zoom: React.PropTypes.number,
	coords: React.PropTypes.shape({
		latitude: React.PropTypes.number,
		longitude: React.PropTypes.number
	})
}
Map.defaultProps = { height: '350px', zoom: 15 }

export default Map
