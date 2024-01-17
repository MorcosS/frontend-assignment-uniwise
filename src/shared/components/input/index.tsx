
import { UniInputProps } from "./input.props";
import "./index.scss";
import { FunctionComponent } from "react";
// the idea behind having a shared input is to use it task 1 and 2
const UniInput: FunctionComponent<UniInputProps>  = ({value, onChange, placeholder, type, name})=>{
  return(
    <input
            className="uni-input"
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
            
        />
  )
}

export {UniInput}