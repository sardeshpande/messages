import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor() {  
    super();  
  
    this.state = {  
      EmployeeName: '', 
      Email: '',  
      Password: '',  
      Contact: ''  
    }
    this.Email = this.Email.bind(this);  
    this.Password = this.Password.bind(this);  
    this.EmployeeName = this.EmployeeName.bind(this);  
    this.Password = this.Password.bind(this);  
    this.Contact = this.Contact.bind(this); 
    this.register = this.register.bind(this);  
  }  
  
  
  
  Email(event) {  
    this.setState({ Email: event.target.value })  
  }  
  
  Contact(event) {  
    this.setState({ Contact: event.target.value })  
  }  
  
  Password(event) {  
    this.setState({ Password: event.target.value })  
  }   
  EmployeeName(event) {  
    this.setState({ EmployeeName: event.target.value })  
  }  
  
  register(event) {  
  
    axios('localhost:8080/user/adduser?name=${this.state.EmployeeName}&email=${this.state.Email}&contactNumber=${this.state.Contact}&password={this.state.Password}', {  
      method: 'POST'
    }).then((Result) => {  
        if (Result.Status == 'Success')  
                this.props.history.push("/Dashboard");  
        else  
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
  }  
  
  render() {  
  
    return (  
      <div className="app flex-row align-items-center">  
        <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                  <Form>  
                    <div class="row" className="mb-2 pageheading">  
                      <div class="col-sm-12 btn btn-primary">  
                        Sign Up  
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.EmployeeName} placeholder="Enter Employee Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="contact"  onChange={this.Contact} placeholder="Enter Contact" />  
                    </InputGroup>  
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>  
                  </Form>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
      </div>  
    );  
  }  
}
export default App;
