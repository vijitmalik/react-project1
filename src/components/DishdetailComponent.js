import React,{Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay,CardText } from 'reactstrap';
//import  Menu from '../components/MenuComponent';
//import { DISHES } from '../shared/dishes';
//import { render } from '@testing-library/react';

class Dishdetail extends Component{
    constructor(props){
      super(props);

      this.state = {
        selectedDish:null
    }
       
    }
  //   onDishSelect(dish){
  //     this.setState({ selectedDish: dish});
  // } 
         
        renderDish(dish){
              
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

   
          
            

         render(){
            return(
                <div className="container" >
                  <div className="row">
                   {this.renderDish(this.props.theDish)}
                  </div>
                </div>
            );
       }
       

}


export default Dishdetail;
