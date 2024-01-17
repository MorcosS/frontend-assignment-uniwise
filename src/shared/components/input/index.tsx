
import { UniInputProps } from "./input.props";
import "./index.scss";
// the idea behind having a shared input is to use it task 1 and 2
const UniInput = ({value, onChange, placeholder, type, name}:UniInputProps)=>{
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