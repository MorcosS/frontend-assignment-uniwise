import { FunctionComponent } from "react";
import { ToDo } from "../../ToDo.props";
import "./index.scss";


interface ToDoItemProps {
  item:ToDo;
  isDone: boolean;
  onSetChecked: (value: boolean) => void;
  handleDeleteTodo?:() => void;
}

const ToDoItem: FunctionComponent<ToDoItemProps> = (props) => {
  return <div className={props.isDone ? "done-todo" : ""} onClick={(event) => props.onSetChecked(!props.isDone)}>  
    {!props.isDone && <button onClick={(event)=>{
       props.handleDeleteTodo && props.handleDeleteTodo();
       event.stopPropagation();
       }} className="button">X</button>}
    <input type="checkbox" checked={props.isDone} onChange={(event) => props.onSetChecked(event.currentTarget.checked)} />
    <label className="todo-label">{props.item.value}</label>
    </div>
};

export {ToDoItem};
