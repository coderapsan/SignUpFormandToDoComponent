import React from "react";
import ReactDOM from "react-dom";


const App =()=>{

const [signupState,setSignupState]=React.useState(false);
const [todoState,setTodoState]=React.useState(false);

  const handleSignup=(e)=>{
    e.preventDefault();
    setSignupState(!signupState); 
    setTodoState(false);


  }
   const handleTodo=(e)=>{
    e.preventDefault();
    setTodoState(!todoState); 
    setSignupState(false);


  }
  return(
    <main> <h1 className="title">App Component</h1>

    <div className="buttonCollection"> 
    <ul>
    <li className="componentList"> SignUp Component</li>
    <input type="button" value="SignUp" onClick={handleSignup}/>
    <li className="componentList"> Todo Component</li>
    <input type="button" value="Todo" onClick={handleTodo}/>
    </ul>
    </div>
    <components>
    {signupState ? (<Signup/>):null
    }
    {todoState ? <Todo/> :null}
    </components>
    

    </main>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"));
