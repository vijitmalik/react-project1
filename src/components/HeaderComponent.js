import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Collapse, NavItem, NavbarToggler, Nav, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);
             
            this.state={
                isNavOpen: false,
                isModalOpen:false
            };

            this.toggleNav=this.toggleNav.bind(this);
            this.toggleModal=this.toggleModal.bind(this);
            this.handleLogin=this.handleLogin.bind(this);
           
    }
        toggleNav(){
            this.setState({
                isNavOpen : !this.state.isNavOpen
                
            });
        }
        toggleModal(){
            this.setState({
                isModalOpen : !this.state.isModalOpen
                
            });
        }
        handleLogin(event){
            event.preventDefault();
            this.toggleModal();
            alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
            
        }


        render(){

        return(
            <div>
                <Navbar dark expand="md" >
                    <div className="container" >    
                        <NavbarToggler onClick={this.toggleNav} />                    
                        <NavbarBrand className="mr-auto  ml-3" href="/"> <img src={'assets/images/logo.png'} height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav Navbar className="row">
                                <NavItem className="ml-2 col-md-auto col-sm-12">
                                    <NavLink className="nav-link "  to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem  className="col-md-auto col-sm-12"> 
                                    <NavLink className="nav-link col-12" to="/aboutus"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem  className="col-md-auto col-sm-12">
                                    <NavLink  className="nav-link"  to="/Menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem  className="col-md-auto col-sm-12">
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                <Nav>
                                    <NavItem >
                                        <Button className="bg bg-danger" onClick={this.toggleModal}> 
                                          <span className="fa fa-sign-in fa-lg" ></span> Login
                                        </Button>
                                        
                                    </NavItem>
                                </Nav>
                            </Nav>
                        
                        </Collapse>
                    
                    
                    
                    </div>                   

                </ Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className row row-header>
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and 
                                create a unique fusion experience. Our lipsmack
                                creations will tickle your culinary senses!</p>
                        </div>
                        
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggleModal} >Login</ModalHeader>
                    <ModalBody>
                            <Form onSubmit={this.handleLogin} >
                                <FormGroup>
                                    <Label htmlFor='username' >Username</Label>
                                    <Input type="text" id="username" name="username"  innerRef={(input)=> this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password' >password</Label>
                                    <Input type="password" id="password" name="password" innerRef={(input)=> this.password=input}/>
                                </FormGroup>
                                <FormGroup check>   
                                    <Input name="remember" type="checkbox" name="remember" id="check"innerRef={(input)=> this.remember=input} />
                                    <Label check >Remember Me</Label>
                                </FormGroup>

                                <Button type="submit" value="submit" color="primary">Login</Button>

                            </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default Header; 