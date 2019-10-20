import React from "react";
import $ from "jquery";
import Firebase from "firebase";
import {Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from "reactstrap";

var firebaseConfig = {
    apiKey: "AIzaSyDdIWRkQGiSQOc6_SZrzJmxYt4QqsnDL70",
    authDomain: "yassine-934c9.firebaseapp.com",
    databaseURL: "https://yassine-934c9.firebaseio.com",
    projectId: "yassine-934c9",
    storageBucket: "yassine-934c9.appspot.com",
    messagingSenderId: "902920329547",
    appId: "1:902920329547:web:eb2f2163d43e5fa5f830ce",
    measurementId: "G-5J279TV2FN"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);


$(function () {
    var messagesRef = Firebase.database().ref('yassine');

    function submitForm(e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#msg").val();
        saveMessage(name,email,message);

    }

    function saveMessage(name,email,message) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            message: message
        });
    }

    $('.contact-form').submit(function (event) {
        submitForm(event);
        $("input,textarea").val('');
        $(".status").append("<div class='alert alert-secondary'>Message sent</div>")
    })
})




function Contact() {
    return(
        <div className="section landing-section">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center">Keep in touch?</h2>
                        <Form className="contact-form">
                            <Row>
                                <Col md="6">
                                    <label>Name</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fas fa-male"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input id={'name'} placeholder="Name" type="text" required />
                                    </InputGroup>
                                </Col>
                                <Col md="6">
                                    <label>Email</label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fas fa-envelope-open-text"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input id={'email'} placeholder="Email" type="email" required />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <label>Message</label>
                            <Input
                                id={'msg'}
                                placeholder="Tell us your thoughts and feelings..."
                                type="textarea"
                                rows="4"
                                required
                            />
                            <Row>
                                <Col className="ml-auto mr-auto" md="4">
                                    <Button className="btn-fill" size="lg">
                                        Send Message
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <div className="status"></div>
            </Container>
        </div>
    )
}

export default Contact;
