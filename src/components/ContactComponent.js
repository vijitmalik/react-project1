import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, FormGroup, Form, Col, Label, Input, Button  } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component{
    
    constructor(props){
        super(props);

        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            
        };
        this.Validate={
            firstnameError:'',
            lastnameError:'',
            telnumError: '',
            emailError: '',
            messageError: '',

        }

        // this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }  
    

                // handleInputChange(event){
                //     let target = event.target;
                //     let name = target.name;
                //     let value = target.type==='checkbox' ? target.checked : target.value;
                //     this.setState({
                //         [name]: value
                //     });
                    
                // }
                
            valid(){
                
                if(this.state.firstname.length <=3 | this.state.firstname.length >10 ){
                    this.setState({firstnameError: 'length should be between 3 to 10 characters' });
                }
                
                if(this.state.lastname.length <=3 | this.state.firstname.length >10 ){
                    this.setState({firstnameError: 'length should be between 3 to 10 characters' });
                }
                const reg= /^\d+$/;
                if(!reg.test(this.state.telnum)  ){
                    this.setState({telnumError: 'tel must contain numbers only' });
                }
                else{
                    return(true);
                }
            }
            
            handleSubmit(event){
                event.preventDefault();

                if(this.valid()){
                    alert('Current State is: ' + JSON.stringify(this.state));
                    console.log("current state is " + JSON.stringify(this.state));
                }
          
            }

    render(){

         
   return(
            <div className="container">
                     <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                    <h3>Contact Us</h3>
                                    <hr />
                            </div>                
                      </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content" >
                        <div className="col-12">
                            <h3>Send us your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-9" >
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"     
                                        onChange={(event)=>{ this.setState({firstname:event.target.value}) } } />
                                     
                                     <p>{this.state.firstnameError}</p>                    
                                </Col>           
                                                   
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        // value={this.state.lastname}
                                        // onChange={this.handleInputChange}
                                        onChange={(event)=>{ this.setState({lastname:event.target.value}) } } />
                                     <p>{this.state.lastnameError}</p>
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        // value={this.state.telnum}
                                        // onChange={this.handleInputChange} 
                                        onChange={(event)=>{ this.setState({telnum:event.target.value}) } }/>
                                     <p>{this.state.telnumError}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        // value={this.state.email}
                                        // onChange={this.handleInputChange}
                                        onChange={(event)=>{ this.setState({email:event.target.value}) } } />
                                     <p>{this.state.emailError}</p>
                                </Col>
                                    <p>{this.state.emailError}</p>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                // checked={this.state.agree}
                                                // onChange={this.handleInputChange}
                                                onChange={(event)=>{ this.setState({agree:event.target.checked} )}} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            // value={this.state.contactType}
                                            // onChange={this.handleInputChange}
                                            onChange={(event)=>{ this.setState({contactType:event.target.value}) } }>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        // value={this.state.message}
                                        // onChange={this.handleInputChange}
                                        onChange={(event)=>{ this.setState({message:event.target.value}) } }></Input>
                                     <p>{this.state.messageError}</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        </div>
                </div>
            </div>
        );
    }
   
}

export default Contact;