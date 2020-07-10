import React,{Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

import Name, {Greet}  from './experiment';
import  Count from'./experiment2';
import  Input from'./hooks';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import About from './Aboutus'; 
import Contact from './ContactComponent';
import { Switch, Route, Redirect, Router, whithRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}



class MainComponent extends Component{

  constructor(props){
      super(props);

       

    }
 
   

  render(){
    const DishWithId=({match})=>{
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id===parseInt(match.params.dishId,10))[0] } 
        />
      );
    };

        const HomePage=(props)=>{
          return(
            <Home
               dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
               promotion={this.props.promotions.filter((promotion)=>promotion.featured)[0]} 
               leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
           />
          );
        }
        

    return (
       <div>
          <Switch>
            <Route path='/home' component={(props)=><HomePage/>}/>
            <Route exact path ="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
            <Route path = '/menu/:dishId' component={DishWithId} />
            <Route path='/aboutus' component = {() => <About leaders={this.props.leaders}/>    } />
            <Route path='/contactus' component={()=> <Contact />} />
            <Redirect to="/home" />

          </Switch>

          
          {/* dish id of the clicked dish is passed as a parameter from menu comp. to the selectedDish which is then used to pass that dish details as props to the dish detail comp.
          - [0] is the first element in array because the javascript filter returns sub array based on a condition */}
           {/* <Greet name="everyone" char="good"/> */}
          {/* <Name/> */}
          {/* <Count/> */}
          {/* <Input /> */}

       </div>
    );
  }
}


export default withRouter(connect(mapStateToProps)(MainComponent));
