import React, { Component } from 'react';  
import './App.css';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

class Dashboard extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            SenderEmail: '',  
            Message:'',
            receiverEmail:''

        }  
  
        this.SenderEmail = this.SenderEmail.bind(this);  
        this.Message = this.Message.bind(this);  
        this.receiverEmail = this.receiverEmail.bind(this);  
    }  
  
    SenderEmail(event) {  
        this.setState({ Email: event.target.value })  
    }
    
    ReceiverEmail(event) {  
        this.setState({ Email: event.target.value })  
    }   
    Message(event) {  
        this.setState({ Password: event.target.value })  
    }  
    SendMessage(event) {  
        debugger;  
        fetch('localhost:8080/message/sendmessage?sender=${this.SenderEmail}&message=${this.Message}&recevier=${this.receiverEmail}', {  
            method: 'GET' 
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status == 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("/Dashboard");  
            })  
    }  
  
    render() {  
  
        return (  
            <div className="app flex-row align-items-center">  
                <Container>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div class="row" className="mb-2 pageheading">  
                                                <div class="col-sm-12 btn btn-primary">  
                                                    Dashboard  
                             </div>  
                                            </div>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="text" onChange={this.Message} placeholder="Enter Message" />  
                                            </InputGroup> 
                                            <Button onClick={this.SendMessage} color="success" block>Send Message</Button>  
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div>  
        );  
    }  
}
export default Dashboard; 


