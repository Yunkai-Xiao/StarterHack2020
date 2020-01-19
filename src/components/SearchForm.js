import React, {Component} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';

class SearchForm extends Component {
    render(){
        return this.props.postEditing ? (
            <Modal 
              style={{position: "float", paddingLeft: '200eh', paddingTop: '15px'}}
              show={true}
              title="Post"
              acceptenabled={"true"}
              isloading={"false"}>
              <Modal.Header closeButton>
                <Modal.Title>Post</Modal.Title>
                </Modal.Header>
              <Modal.Body>
              <Form onSubmit={this.props.acceptReviewHandler}>
                <Form.Group controlId="lat">
                    <Form.Label>Latitude</Form.Label>
                    <Form.Control type="text" placeholder="Latitude" onChange={e => this.props.latChangeHandler(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="lng">
                    <Form.Label>Longitude</Form.Label>
                    <Form.Control type="text" placeholder="Longitude" onChange={e => this.props.lngChangeHandler(e.target.value)}/>
                </Form.Group>
                <Button onClick={this.props.acceptReviewHandler}>Post</Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.cancelReviewHandler}>Close</Button>
            </Modal.Footer>
            </Modal>) : null
    };
}

export default SearchForm;