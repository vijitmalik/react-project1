import React,{Component} from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter} from 'react-router-dom';
//import { Navbar, NavbarBrand} from 'reactstrap';
//import  Menu from './components/MenuComponent';
//import { DISHES } from './shared/dishes';
//import Dishdetail from './components/DishdetailComponent';
// import Name, {Greet}  from './components/experiment';
// import  Count from'./components/experiment2';
// import  Input from'./components/hooks';
import MainComponent from './components/MainComponent';

class App extends Component{

  constructor(props){
      super(props);
       
        

  }
 
  render(){

    return (   
      <BrowserRouter>
        <div className="App">
            <Header />
        
            <MainComponent  />
            
            <Footer />
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
