import React,{Component} from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Name, {Greet}  from './experiment';
import  Count from'./experiment2';
import  Input from'./hooks';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

class MainComponent extends Component{

  constructor(props){
      super(props);

        this.state ={
            dishes: DISHES,
            selectedDish: null       
        }

    }
 
    onDishSelect(dishId){
        this.setState({selectedDish: dishId});
    };

  render(){

    return (
       <div>
          <Navbar dark color="primary">
            <div className="container" >
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>

          <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId) } />
          {/* dish id of the clicked dish is passed as a parameter from menu comp. to the selectedDish which is then used to pass that dish details as props to the dish detail comp.
          - [0] is the first element in array because the javascript filter returns sub array based on a condition */}
          <Dishdetail theDish={this.state.dishes.filter((dish) => dish.id== this.state.selectedDish )[0]  } />
          <Greet name="everyone" char="good"/>
          <Name/>
          <Count/>
          <Input />

       </div>
    );
  }
}

export default MainComponent;
