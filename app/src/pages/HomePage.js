import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/HomePage.css';
import SearchBar from '../components/SearchBar';
import { Dropdown } from 'react-bootstrap';
import Scoops from '../assets/images/scoops.png';

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* Home page title */}
        <div id="homePageTitleDiv">
            <div id="scoopsImg" >
              <img src={Scoops}/>
            </div>
          {/* <p className="homePageTitleTxt">Find your next scoop!</p> */}
        </div>

        {/* Search */}
        <div id="homePageSearchDiv">
            <SearchBar/>
            <div id="searchDropDownDiv">
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Search by rating
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">5 Star</Dropdown.Item>
                  <Dropdown.Item href="#">4 Star</Dropdown.Item>
                  <Dropdown.Item href="#">3 Star</Dropdown.Item>
                  <Dropdown.Item href="#">2 Star</Dropdown.Item>
                  <Dropdown.Item href="#">1 Star</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
      </div>
    );
  }
}

export default HomePage;