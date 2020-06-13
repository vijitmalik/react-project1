import React, {Component} from 'react'





class Count extends Component {
  constructor(props) {
    super(props)

    this.state = {
        count: 1
    }
  }
  Increment(){
    this.setState(
      {count: this.state.count +1}//,()=>{console.log(this.state.count)}
    );
  }

  render() {
    return (
      <div>

      <button onClick={()=>this.Increment()} placeholder="click">click</button>
      <div>MyComponent, {this.state.count}</div>
      </div>
    )
  }
}



//.......Conditional rendring
// class Condition extends Component {
//   constructor(props) {
//     super(props)
//       this.state= {
//         isLoggedIn: true
//
//       }
//
//   }
//         //if else rendring
//   // render(){
//   //   if(this.state.isLoggedIn){
//   //     return  <h1>hello user</h1>
//   //     }
//   //     else {
//   //       return <h1>hello guest</h1>
//   //     }
//   // }
//         //  ...........element-variable redring
//   // render(){
//   //   let message
//   //   if(this.state.isLoggedIn){
//   //     message= <h1>hello user</h1>
//   //   }
//   //   else {
//   //     message= <h1>hello guest</h1>
//   //   }
//   //
//   //   return <div>{message}</div>
//   // }
//     //........................ternary conditional operator
//     // render(){
//     //  return   this.state.isLoggedIn ?(
//     //     <div>hello user</div>):(<div>Hello guest</div>)
//     //
//     // }
//       // short circuit operator
//       render(){
//         return this.state.isLoggedIn && <div>hello user</div>
//       }
// }
//
//
// export default Condition;
export default Count;
