import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay,CardText } from 'reactstrap';
//import Dishdetail from '../components/DishdetailComponent';
import { DISHES } from '../shared/dishes';

  const RenderMenuItem=({dish})=>{
    return(
      <Card >
        <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay >
             <CardTitle>{dish.name}</CardTitle>

          </CardImgOverlay>
      </Card>
    )
  }

  function Menu(props){
    const menu = props.dishes.map((dish) => {
      return(
          <div  key={dish.id} className="col-12 col-md-5 m-1" >
           <RenderMenuItem dish={dish}   />         
          </div>
      );
    });

    return(
      <div className="container ">
          <div className="row">
              {menu}
          </div>
            <div className="row">
            {/* <Dishdetail theDish={this.state.selectedDish} /> */}
              
            </div>

      </div>
    );
  }

 export default Menu;
