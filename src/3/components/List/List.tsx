import { FunctionComponent } from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDo } from "../../ToDo.props";
import "./list.scss"
// Components

interface ListProps {
  data: ToDo[]
  isDone: boolean;
  updateItemCheck:(item:ToDo) => void;
  handleDeleteTodo?:(iten:ToDo) => void;
}

const ToDoList: FunctionComponent<ListProps> = (props) => {
  return <div className="list">
    {props.data.map((item) => <ToDoItem item={item} isDone={props.isDone} handleDeleteTodo={() =>props.handleDeleteTodo && props.handleDeleteTodo(item)} onSetChecked={() => props.updateItemCheck(item)}/>)}
  </div>;
};

export  {ToDoList};
