import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// Map to be used
class MapComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialLat: this.props.param.initialLat,
            initialLng: this.props.param.initialLng,
            activeMarkers: this.props.param.activeMarkers,
            showInfo: this.props.param.showInfo,
            searchResults: this.props.param.searchResults,
            storeName: this.props.param.storeName
        }
    }

    /* Method to change the state when the marker on the map is clicked */
    onMarkerClick = (props, marker, e) => {
        this.setState({
            showInfo: true,
            activeMarkers: marker,
            selected: props
        })
    }

    /* Method to change the state when the marker info is closed */
    onMarkerClose = () => {
        this.setState({
            showInfo: false,
            activeMarkers: {}
        })
    }

    render() {
        return (
            <div>
                {/* Map */}
                <Map
                    containerStyle={containerStyle}
                    google={window.google}
                    zoom={15}
                    initialCenter={{
                        lat: this.state.initialLat,
                        lng: this.state.initialLng
                    }}
                >
                    {

                        this.state.searchResults != null ?
                            // Display multiple markers for search results page
                            Object.values(this.state.searchResults).map(info => (
                                <Marker
                                    name={info.store}
                                    averageRating={info.averageRating}
                                    location={info.location}
                                    path={info.path}
                                    position={{
                                        lat: info.lat,
                                        lng: info.lng
                                    }}
                                    onClick={this.onMarkerClick.bind(this)}
                                />
                            ))
                            :
                            // Display single marker for business page
                            <Marker
                                name={this.state.storeName}
                                position={{
                                    lat: this.state.initialLat,
                                    lng: this.state.initialLng
                                }}
                                onClick={this.onMarkerClick.bind(this)}
                            />
                    }
                    {/* Information window when the marker is clicked */}
                    <InfoWindow
                        marker={this.state.activeMarkers}
                        visible={this.state.showInfo}
                        onClose={this.onMarkerClose.bind(this)}
                    >
                        <div>
                            <strong>{this.state.activeMarkers.name}</strong>
                            {
                                // Only show this information for the search results page
                                this.state.activeMarkers.averageRating != null && this.state.activeMarkers.location != null
                                    && this.state.activeMarkers.path != null ?
                                    <div>
                                        <div>
                                            Average Rating: {this.state.activeMarkers.averageRating}
                                        </div>
                                        <div>
                                            Location: {this.state.activeMarkers.location}
                                        </div>
                                        { /* Link to corresponding business */}
                                        <a href={"./" + this.state.activeMarkers.path}> Store Details</a>
                                    </div>
                                    :
                                    <div />
                            }
                        </div>

                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

// Container style for map
const containerStyle = {
    position: "relative",
    padding: '.5rem .5rem',
    marginRight: '15%',
    width: '70vw',
    height: '40vh'
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapComponent);