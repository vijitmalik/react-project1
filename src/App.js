import React,{Component} from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { BrowserRouter} from 'react-router-dom';
import MainComponent from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
 const store= ConfigureStore();

class App extends Component{

  constructor(props){
      super(props);
       
        

  }
 
  render(){

    return (   
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
              <Header />
          
              <MainComponent  />
              
              <Footer />
          </div>
        </ BrowserRouter>
      </Provider>
    );
  }
}

export default App;
