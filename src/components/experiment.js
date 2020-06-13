import React ,{Component} from 'react';



// let name= "vijit malik"
// const Name= () =>{
//   return(  <h1>Hello {name}</h1>);
// }
//
const Greet=({name},{char}) => {
  //const {name}=props;
  return( <h1>hey {name} you are{char}</h1>)
}

class Name extends Component{
    constructor(props){
      super(props);
      this.state={
         namee:"vm",
          collegee:"iet"

      }

    }
    change(){
      this.setState({
        namee:"rahul"
      });
    }

    render(){
      //return(  <h1>hello {this.state.namee}, college is {this.state.collegee}</h1>)
      const { namee , collegee }= this.state // array destructuring

        return(
          <>
          <h1> heyyy{namee} and {collegee}</h1>,
          <button onClick={()=> this.change()}>click to change</button>
          </>
        );


    }
}






export default Name;
export {Greet};
