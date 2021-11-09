import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/ResultsSample.css';
import SearchBar from '../components/SearchBar';
import SearchListing from '../components/SearchListing';
import Map from '../components/Map';

// A Sample search results page
class ResultsSample extends Component {
  constructor(props) {
    super(props)

    // console.log(props.location)

    this.state = {
      initialLat: 43.263,
      initialLng: -79.921,
      activeMarkers: {},
      showInfo: false,
      // The user's geolocation or null if not searching by geolocation
      geoLocation: {
        lat: props.location.state.currentLat,
        lng: props.location.state.currentLng
      },
      searchResults: {
        0: {
          store: "FruitYoyo",
          location: "1 Sixth Street, Hamilton, Ontario L2C1H3",
          averageRating: 4,
          path: "fruityoyo",
          lat: 43.262342,
          lng: -79.9234,
        },
        1: {
          store: "Coco Gelato",
          location: "81 Nineth Street, Hamilton, ON L9H2B1",
          averageRating: 3.5,
          path: "coco-gelato",
          lat: 43.2658,
          lng: -79.92545
        },
        2: {
          store: "Emily's Ice Cream Parlour",
          location: "200 Sixteenth Street, L2C4H5 Hamilton Ontario",
          averageRating: 4,
          path: "emilys-ice-cream-parlour",
          lat: 43.2612,
          lng: -79.92
        }
      }
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div id="searchPageSearchBarDiv">
          <SearchBar/>
        </div>

        {/* Display the geolocation value if it is searched using geolocation */}
        { this.state.geoLocation.lat != null && this.state.geoLocation.lng != null ?
          <h1 id="results"> Current Location: Latitude {this.state.geoLocation.lat}, Longitude {this.state.geoLocation.lng} </h1>
          : <div/>
        }

        <h1 id="results">Results</h1>

        <div id="searchResultsDiv">
            <div>
                <Map param={this.state}/>
            </div>
            <div id="listingsDiv">
                {
                /* Search results from user query */
                Object.values(this.state.searchResults).map(info => (
                  <SearchListing storeInfo={info}/>
                ))
              }
            </div>
        </div>
    </div>
    );
  }
}

export default ResultsSample;
