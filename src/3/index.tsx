import * as React from "react";

// Style
import "./index.scss";
import { ToDoList } from "./components/List/List";
import { ToDo } from "./ToDo.props";
import { UniInput } from "../shared/components/input";
import { generatId } from "./ToDo.util";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  // list of things in the todo
  const [pendingItems, setPendingItems] = React.useState<ToDo[]>([]);
  // list of things that is alreay done
  const [doneItems, setDoneItems] = React.useState<ToDo[]>([]);
  // this is a newly created item
  const [newItem, setNewItem]  = React.useState<string>("");
  // this is search key to search for items in the todo 
  const [searchPendingItems, setSearchPendingItems]  = React.useState<string>("");

  // function to handle entr key press to add item to the todo list
  const handleKeyPress = (enterClicked:boolean) => {
      if(enterClicked){
        setPendingItems([...pendingItems,{id:generatId(), value:newItem}]);
        setNewItem("");
      }
    }

// this is to mark todos as done
const handleSetDoneStatus = (item: ToDo) => {
  setPendingItems(pendingItems.filter((x) => x.id != item.id));
  setDoneItems([...doneItems, item])
}

// handle item removal from done list
const handleSetPendingStatus = (item: ToDo) => {
  setDoneItems(doneItems.filter((x) => x.id != item.id));
  setPendingItems([...pendingItems, item])
}

// handle deleting from the todos
const handleDeleteTodo = (item: ToDo) =>{
  setPendingItems(pendingItems.filter((x) => x.id != item.id));
}

  return <div id="task-3">
    <div className="list-container">  

    <span className="list-tile">Todo List</span>
    <UniInput name="Search" placeholder="Search for todos" value={searchPendingItems} onChange={(event) => setSearchPendingItems(event.currentTarget.value)} /> 
    <div>
   </div>
     <ToDoList data={pendingItems.filter(function (str) { return str.value.toLowerCase().includes(searchPendingItems.toLowerCase()); })} isDone={false} updateItemCheck={handleSetDoneStatus}  handleDeleteTodo={handleDeleteTodo}/>
      <input placeholder="Add a new todos" className="todo-input" onKeyDown={(event) => handleKeyPress(event.key ==='Enter')} value={newItem} onChange={(event)=> setNewItem(event.currentTarget.value)}/>
    </div>
    <div className="list-container">     
    <span className="list-tile">Done List</span>
      <ToDoList data={doneItems} isDone={true} updateItemCheck={handleSetPendingStatus} />
    </div>
  </div>;
};

export default Task3;
