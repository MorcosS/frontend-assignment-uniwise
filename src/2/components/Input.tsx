import { FunctionComponent } from "react";
// this file is not used as already created a shared UniInput in shared folder in task 1 to be used here as well
/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {}

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <div>#Input goes here#</div>
  );
};

export default Input;
