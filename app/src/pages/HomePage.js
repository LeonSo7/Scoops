import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/HomePage.css';
import SearchBar from '../components/SearchBar';
import { Dropdown } from 'react-bootstrap';
import ScoopsSloganImg from '../assets/images/scoops.png';
import ThreeConesImg from '../assets/images/three-cones.png';

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* Home page title & cover */}
        <div id="homePageTitleDiv">
            <div id="bannerImgDiv" >
              <img id="bannerImg" src={ScoopsSloganImg} alt="Scoops logo and slogan graphic" width="732px" height="296px"/>
            </div>
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
                <Dropdown.Item href="#">4+ Star</Dropdown.Item>
                <Dropdown.Item href="#">3+ Star</Dropdown.Item>
                <Dropdown.Item href="#">2+ Star</Dropdown.Item>
                <Dropdown.Item href="#">1+ Star</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Bottom banner graphic */}
          <div id="bottomBannerDiv">
            <div id="bannerImgDiv" >
              <img id="bannerImg" src={ThreeConesImg} alt="Three icecream cones graphic" width="686px" height="353px"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;