import { FunctionComponent, useEffect, useState } from "react";

// Components
import List from "./components/List";
import { UniInput } from "../shared/components/input";
import { tempData } from "./list.util";

const Task2: FunctionComponent = () => {
  useEffect(() => {
    //a mock call as if we getting data from backend and setting it to our list
    setData(tempData);
  },[]);

  const [data, setData] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
 
    
  return (
    <div>
      <UniInput placeholder="Search" value={searchValue} onChange={(event) => setSearchValue(event.currentTarget.value)} name="search" />
      <br />
      <List data={tempData.filter(function (str) { return str.toLowerCase().includes(searchValue.toLowerCase()); })} />
    </div>
  );
};

export default Task2;
