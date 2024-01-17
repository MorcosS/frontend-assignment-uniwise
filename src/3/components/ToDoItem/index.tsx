import { FunctionComponent } from "react";
import { ToDo } from "../../ToDo.props";
import "./index.scss";


interface ToDoItemProps {
  item:ToDo;
  isDone: boolean;
  onSetChecked: (value: boolean) => void;
}

const ToDoItem: FunctionComponent<ToDoItemProps> = (props) => {
  return <div className={props.isDone ? "done-todo" : ""}>
    <input type="checkbox" checked={props.isDone} onChange={(event) => props.onSetChecked(event.currentTarget.checked)} />
    <label>{props.item.value}</label>
  </div>;
};

export {ToDoItem};
