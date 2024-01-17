import { FunctionComponent } from "react";
import { ToDoItem } from "../ToDoItem";
import { ToDo } from "../../ToDo.props";

// Components

interface ListProps {
  data: ToDo[]
  isDone: boolean;
  updateItemCheck:(item:ToDo) => void;
}

const ToDoList: FunctionComponent<ListProps> = (props) => {
  return <div>
    {props.data.map((item) => <ToDoItem item={item} isDone={props.isDone}  onSetChecked={() => props.updateItemCheck(item)}/>)}
  </div>;
};

export  {ToDoList};
