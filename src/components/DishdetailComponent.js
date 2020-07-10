import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay,CardText, Breadcrumb, BreadcrumbItem   } from 'reactstrap';
//import  Menu from '../components/MenuComponent';
//import { DISHES } from '../shared/dishes';
//import { render } from '@testing-library/react';
import {Link} from 'react-router-dom';


     
       function  RenderDish({dish}){
              
                if(dish != null)
               return(
                <div className="row col-6">               
                    <Card  >
                        <CardImg width="50px" src={`/${dish.image}`} alt={dish.name} />
                      <CardBody >
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                      </CardBody>
                    </Card>
                </div>
               );
               
          
               else
                 return(<div></div >);
            
          
        }
      
   
          
            

        const DishDetail=(props)=>{
            return(
                <div className="container" >
                  <div className="row">
                    <Breadcrumb>
                      <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                  </div>
                  <div className="row">
                  <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>     
                    <div>
                      <RenderDish dish={props.dish}/>
                    </div>
                  </div>
                </div>
            );
         }
        
       




export default DishDetail;
