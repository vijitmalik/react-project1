import React,{Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap';
import  Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Dishdetail from './components/DishdetailComponent';
import Name, {Greet}  from './components/experiment';
import  Count from'./components/experiment2';
import  Input from'./components/hooks';


class App extends Component{

  constructor(props){
      super(props);
        this.state ={
            dishes: DISHES,
            selectedDish: null

        };
        

  }
 
  render(){

    return (
       <div className="App">
          <Navbar dark color="primary">
            <div className="container" >
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>

          <Menu dishes={this.state.dishes} selectedDish={this.state.selectedDish} />
         
          <Greet name="everyone" char="good"/>
          <Name/>
          <Count/>
          <Input />

       </div>
    );
  }
}

export default App;
