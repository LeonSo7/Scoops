import React, { Component } from 'react';
import { Button, Col, Form, Row, Modal } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/pages/SignUpPage.css'
import { Animated } from "react-animated-css";
import axios from 'axios';

// Sign up page
class SignUpPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            phoneNumberInputValue: "",
            firstNameInputValue: "",
            lastNameInputValue: "",
            postalCodeInputValue: "",
            show: false,
            emailInputValue: "",
            passwordInputValue: ""
        };
    }

    // Redirect to login page after sign up
    navigateToLogin() {
        this.setState({
            show: false
        });
        window.location.href = '/login'
    }

    // Handle for submission and validation state
    async handleSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            e.stopPropagation();
            let body = {
                firstName: this.state.firstNameInputValue,
                lastName: this.state.lastNameInputValue,
                phoneNumber: this.state.phoneNumberInputValue,
                email: this.state.emailInputValue.toLowerCase(),
                postalCode: this.state.postalCodeInputValue.toUpperCase(),
                password: this.state.passwordInputValue
            };
            // HTTP POST request to add user to database
            axios({
                method: 'post',
                url: process.env.REACT_APP_SERVER_URL + '/user',
                data: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            }).then((res) => {
                if (res.status === 200) {
                    this.setState({
                        show: true
                    });
                }
            });
        }
        this.setState({
            validated: true
        });
    };

    handleFirstNameInput(e) {
        // Restrict input to only characters
        var processed = e.target.value.replace(/[0-9]/g, '');
        this.setState({
            firstNameInputValue: processed
        });
    };

    handleLastNameInput(e) {
        // Restrict input to only characters
        var processed = e.target.value.replace(/[0-9]/g, '');
        this.setState({
            lastNameInputValue: processed
        });
    }

    handleEmailInput(e) {
        this.setState({
            emailInputValue: e.target.value
        });
    };

    handlePasswordInput(e) {
        this.setState({
            passwordInputValue: e.target.value
        });
    };

    handlePhoneNumberInput(e) {
        var formatted = this.formatPhoneNumber(e.target.value);
        this.setState({
            phoneNumberInputValue: formatted
        });
    };

    handlePostalCodeInput(e) {
        var formatted = this.formatPostalCode(e.target.value);
        this.setState({
            postalCodeInputValue: formatted
        });
    }

    // Format phone number input to (###) ###-####
    formatPhoneNumber(phoneNumber) {
        // If input is empty (e.g., user deletes the phone number)
        if (!phoneNumber) {
            return phoneNumber;
        }

        // Remove any non-digit characters (restrict user to only entering digits)
        phoneNumber = phoneNumber.replace(/[^\d]/g, "");

        // Only apply formatting when the phone number is greater than just area code (i.e., more than 3 digits)
        if (phoneNumber.length <= 3) {
            return phoneNumber;
        }

        // Formatting for 4-6 digits entered
        if (phoneNumber.length <= 6) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        // Formatting for 7-10 digits entered
        // Restrict input to 7 digits only (if user enters more, we will remove it)
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    };

    // Format postal code input to A#A #A#
    formatPostalCode(postalCode) {
        // If input is empty (e.g., user deletes the postal code)
        if (!postalCode) {
            return postalCode;
        }

        // Remove spaces and to uppercase for processing
        postalCode = postalCode.replace(/ /g, '').toUpperCase();;

        // Only apply formatting when the number of characters entered is greater than 3
        if (postalCode.length <= 3) {
            return postalCode;
        }

        // Formatting for more than 4 characters entered; restrict to 6 character input
        return `${postalCode.slice(0, 3)} ${postalCode.slice(3, 6)}`;
    };

    render() {
        return (
            <div className="wrapper">
                <div id="signUpPageTitleDiv">
                    <Animated animationIn="bounceIn" isVisible={true}>
                        <h1>Sign up today!</h1>
                    </Animated>
                </div>

                {/* User registration form for sign up */}
                <div id="signUpFormDiv">
                    {/* <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}> */}
                    <Form noValidate validated={this.state.validated} onSubmit={(this.handleSubmit.bind(this))}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First name"
                                        required
                                        onChange={(e) => this.handleFirstNameInput(e)}
                                        value={this.state.firstNameInputValue}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last name"
                                        required
                                        onChange={(e) => this.handleLastNameInput(e)}
                                        value={this.state.lastNameInputValue}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label type="tel">Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter phone number"
                                required
                                onChange={(e) => this.handlePhoneNumberInput(e)}
                                value={this.state.phoneNumberInputValue}
                                pattern="^\(\d{3}\)\s\d{3}-\d{4}"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid 10-digit phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                onChange={(e) => this.handleEmailInput(e)}
                                value={this.state.emailInputValue}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required
                                onChange={(e) => this.handlePasswordInput(e)}
                                value={this.state.passwordInputValue}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$"
                            />
                            <Form.Control.Feedback type="invalid">
                                Password must be between 8 and 15 characters long, contain at least one numeric digit, contain at least one uppercase letter, contain at least one lowercase letter, and at least one special character.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPostalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter postal code"
                                required
                                onChange={(e) => this.handlePostalCodeInput(e)}
                                value={this.state.postalCodeInputValue}
                                pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid Canadian postal code.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <Modal
                        show={this.state.show}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Sign up successful!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            You're registered, {this.state.firstNameInputValue}!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={e => this.navigateToLogin(e)}>Login</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default SignUpPage;
