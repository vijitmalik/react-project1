import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay,CardText,Breadcrumb, BreadcrumbItem } from 'reactstrap';
//import DishDetail from '../components/DishdetailComponent';
import { DISHES } from '../shared/dishes';
import {Link} from 'react-router-dom';

  const RenderMenuItem=({dish})=>{
    return(
      <Card >
          <Link to = {`/menu/${dish.id}`} >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay >
                <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
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
                      <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                      </Breadcrumb>
        </div>
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
