import React,{Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Name, {Greet}  from './experiment';
import  Count from'./experiment2';
import  Input from'./hooks';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

class MainComponent extends Component{

  constructor(props){
      super(props);

        this.state ={
            dishes: DISHES,
               
        }

    }
 

  render(){
        const HomePage=()=>{
          return(
            <Home/>
          );
        }

    return (
       <div>
          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path ="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
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

export default MainComponent;
