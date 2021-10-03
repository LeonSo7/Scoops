import React, { Component } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/AddBusinessPage.css'
import CommonHeader from '../components/CommonHeader';


class AddBusinessPage extends Component {
  render() {
    return (
      <div class="wrapper">
        <CommonHeader/>
        <div id="addBusinessPageTitleDiv">
          <h1>Add a business!</h1>
        </div>

        <div id="addBusinessFormDiv">
            <Form>
                <Form.Group className="mb-3" controlId="formBusinessName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="Business name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBusinessDescription">
                <Form.Label>Business Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description of business"/>
                </Form.Group>
                <Form.Group controlId="formReviewPhotoUpload" className="mb-3">
                    <Form.Label>Add photos of business</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formLongitude">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control type="number" placeholder="Longitude"/>
                        </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formLatitude">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control type="number" placeholder="Latitude"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>
    );
  }
}

export default AddBusinessPage;