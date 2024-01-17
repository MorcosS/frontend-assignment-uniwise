import * as React from "react";

// Style
import "./index.scss";
import { ToDoList } from "./components/List/List";
import { ToDo } from "./ToDo.props";
import { UniInput } from "../shared/components/input";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  const [pendingItems, setPendingItems] = React.useState<ToDo[]>([]);
  const [doneItems, setDoneItems] = React.useState<ToDo[]>([]);
  const [pendingItem, setPendingItem]  = React.useState<string>("");
  const [searchPendingItems, setSearchPendingItems]  = React.useState<string>("");

  const handleKeyPress = (enterClicked:boolean) => {
      if(enterClicked){
        setPendingItems([...pendingItems,{id:pendingItems.length + doneItems.length, value:pendingItem}]);
        setPendingItem("");
      }
    }

const handleSetDoneStatus = (item: ToDo) => {
  setPendingItems(pendingItems.filter((x) => x.id != item.id));
  setDoneItems([...doneItems, item])
}

const handleSetPendingStatus = (item: ToDo) => {
  setDoneItems(doneItems.filter((x) => x.id != item.id));
  setPendingItems([...pendingItems, item])
}

  return <div id="task-3">
    <div>     
    Pending List Section
    <div>
    <UniInput name="Search" placeholder="Search" value={searchPendingItems} onChange={(event) => setSearchPendingItems(event.currentTarget.value)} /> 
    </div>
     <ToDoList data={pendingItems.filter(function (str) { return str.value.toLowerCase().includes(searchPendingItems.toLowerCase()); })} isDone={false} updateItemCheck={handleSetDoneStatus}/>
      <input className="todo-input" onKeyDown={(event) => handleKeyPress(event.key ==='Enter')} value={pendingItem} onChange={(event)=> setPendingItem(event.currentTarget.value)}/>
    </div>
    <div>     
    Done List Section
      <ToDoList data={doneItems} isDone={true} updateItemCheck={handleSetPendingStatus} />
    </div>
  </div>;
};

export default Task3;
