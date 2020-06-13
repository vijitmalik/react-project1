import React,{Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay,CardText } from 'reactstrap';
//import  Menu from '../components/MenuComponent';
//import { DISHES } from '../shared/dishes';
//import { render } from '@testing-library/react';


     
       function  RenderDish({dish}){
              
                if(dish != null)
               return(
                 
                 <Card>
                    <CardImg top width="100%"  src={dish.image} alt={dish.name} />
                   <CardBody >
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText> {dish.description} </CardText>
                   </CardBody>
                 </Card>
                );
               
          
               else
                 return(<div>AAAAsdegsiducgsiucsdbcsics</div >);
            
          
        }
      
   
          
            

        const Dishdetail=(props)=>{
            return(
                <div className="container" >
                  <div className="row">
                   <RenderDish dish={props.theDish}/>
                  </div>
                </div>
            );
         }
        
       




export default Dishdetail;
