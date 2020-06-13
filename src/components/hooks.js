import React,{Component, useState} from 'react'


function Input(){

  const [fullname, setFullname]=useState({ fname:'', lname:'' } )
  //const [show, setShow] = useState('guest')
  function change(event){
        let name= event.target.name
        if(name=="fname"){
          setFullname({ fname:event.target.value, lname:fullname.lname })
        }
        else if(name=="lname"){
          setFullname({ lname:event.target.value, fname:fullname.fname })
        }

  }

   const[display,setDisplay]= useState("guest")
  const onsubmit=(event)=>{
    event.preventDefault();
    setDisplay( fullname.fname + fullname.lname )
  }


  return(
    <>

       <h1>hello {display} </h1>
      <form onSubmit={onsubmit}  >
             <input name="fname" placeholder="first name" type="text" value={fullname.fname}  onChange={change}/><br/><br/>
              <input name="lname" placeholder="last name" type="text" value={fullname.lname}  onChange={change}/><br/><br/>

              <button  >Show</button>
      </form>
    </>
  )

}




// function Tick() {
//  //const state= useState();
//
//   const [count, setCount]= useState(0)
//
//   // function Incr(){
//   //   setCount(count +1)
//   // }
//
//   return(
//     <div>
//     <h1>{count}</h1>
//     <button onClick={() => setCount(count+1)} >click to inc.</button>
//   </div>
//   )
// }
export default Input;
