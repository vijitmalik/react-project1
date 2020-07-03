import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Collapse, NavItem, NavbarToggler, Nav } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props);

            
            this.state={
                isNavOpen: false
            };
            this.toggleNav=this.toggleNav.bind(this);
    }
        toggleNav(){
            this.setState({
                isNavOpen : !this.state.isNavOpen
            });
        }
    render(){

        return(
            <div>
                <Navbar dark expand="md" >
                    <div className="container" >    
                        <NavbarToggler onClick={this.toggleNav} />                    
                        <NavbarBrand className="mr-auto" href="/"> <img src={'assets/images/logo.png'} height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav Navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className="nav-link"  to="/Menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
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
            </div>
        );
    }
}
export default Header; 