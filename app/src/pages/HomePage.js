import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/pages/HomePage.css';
import CommonHeader from '../components/CommonHeader';
import SearchBar from '../components/SearchBar';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div class="wrapper">
        <CommonHeader/>

        {/* Home page title */}
        <div id="homePageTitleDiv">
          <h1>Find your next dessert!</h1>
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


        {/* Submit a review button */}
        <div id="submitReviewBtnDiv" class="minorSectionDiv">
          <h2 class="minorSectionTitle">Help others decide on what to eat next!</h2>
          <Link
              to={{
                pathname: "/review",
              }}>
            <Button variant="primary" id="submitReviewBtn">Submit a review</Button>
          </Link>
        </div>

        {/* Add dessert place */}
        <div id="submitNewDessertPlaceBtnDiv" class="minorSectionDiv">
          <h2 class="minorSectionTitle">Are we missing a dessert spot?</h2>
          <Link
              to={{
                pathname: "/add-business",
              }}>
            <Button variant="primary" id="submitLocationBtn">Add a dessert spot</Button>
          </Link>
        </div>
    </div>
    );
  }
}

export default HomePage;