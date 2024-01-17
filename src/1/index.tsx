// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";
import { UniInput } from "../shared/components/input";
import { isValidForm } from "./form.util";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const onSubmit = () => {
    // If you want to do something with form submit
    if(isValidating && !isValidForm(email,password).email && !isValidForm(email,password).password){
      window.location.href = "/task/2";
    }else{
      setIsValidating(true);
    }
  };

  return (
    <div id="task-1">
        <div className="row-container">
        <div className="item-container">
        <label className="label">Email</label>
        </div>
        <div className="item-container">
        <UniInput
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
          type="email"
          placeholder="type email address"
        />
        </div>
        </div>
        
        <div className="row-container">
          
        <div className="item-container">
        <label className="label">Password</label>
        </div>
        <div className="item-container">
        <UniInput
          name="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
          type="password"
          placeholder="type your password"
        />
        </div>
        </div>
        <div className="row-container">
        <button onClick={onSubmit} className="submit-button">Login</button>
        </div>
        
     {isValidating ? isValidForm(email,password).email : undefined && <label className="error">{isValidating ? isValidForm(email,password).password : undefined}</label>}
     <br/>
     {isValidating ? isValidForm(email,password).password : undefined && <label className="error">{isValidating ? isValidForm(email,password).email : undefined}</label>}
    </div>
  );
};

export default Task1;
